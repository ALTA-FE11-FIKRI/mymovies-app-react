// Constructor start
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import axios from "axios";

import { LoadingAnimation } from "components/Loading";
import { MovieType } from "utils/types/movie";
import { useTitle } from "utils/hooks/customHooks";
import { setFavorites } from "utils/redux/reducers/reducer";

import Carousel from "components/Carousel";
import Layout from "components/Layout";
import Hero from "components/Hero";
import Card from "components/Card";
import Button from "components/Button";

const Index = () => {
  const dispatch = useDispatch();
  useTitle("Cinephile - Home");
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  function fetchData(page: number) {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1${page}`
      )
      .then((data) => {
        const { results, total_pages } = data.data;
        setDatas(results);
        setTotalPage(total_pages);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function handleFavorite(data: MovieType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      let parseFav: MovieType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
      dispatch(setFavorites(parseFav));
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Movie added to favorite");
    }
  }

  return (
    <Layout>
      {!loading && (
        <Hero
          datas={datas.slice(0, 5)}
          content={(datas) => (
            <div
              className="hero min-h-[50vh] bg-no-repeat lg:bg-top"
              style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${datas.poster_path})`,
              }}
            >
              <div className="hero-content text-center text-neutral-content">
                <div className="maw-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{datas.title}</h1>
                  <p className="mb-5">{datas.overview}</p>
                  <Button
                    label="SEE DETAIL"
                    id="btn-topRated-details"
                    className="btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
                  />
                </div>
              </div>
            </div>
          )}
        />
      )}
      <div className="flex flex-col justify-center gap-3 p-5">
        <h1 className="my-10 text-center text-5xl text-salte-900 text-black dark:text-white">
          Upcoming Movie
        </h1>
        <Carousel
          datas={datas.slice(0, 5)}
          content={(datas) => (
            <div
              className="carousel carousel-center rounded-box"
              style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${datas.poster_path})`,
              }}
            >
              <div className="hero-content text-center text-neutral-content">
                <div className="maw-w-md">
                  <h1 className="mb-5 text-5xl font-bold">{datas.title}</h1>
                </div>
              </div>
            </div>
          )}
        />

        <div>
          <h1 className="my-10 text-center text-5xl text-salte-900 dak:text-white">
            Now playing
          </h1>

          <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
            {loading
              ? [...Array(20).keys()].map((data) => (
                  <LoadingAnimation key={data} />
                ))
              : datas.map((data) => (
                  <Card
                    key={data.id}
                    title={data.title}
                    image={data.poster_path}
                    id={data.id}
                    labelButton="ADD TO FAVORITE"
                    onClickFav={() => handleFavorite(data)}
                  />
                ))}
          </div>
          <div className="btn-group w-full justify-center">
            <button
              className="btn"
              onClick={() => prevPage()}
              disabled={page === 1}
            >
              «
            </button>
            <button className="btn">{page}</button>
            <button
              className="btn"
              onClick={() => nextPage()}
              disabled={page === totalPage}
            >
              »
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
