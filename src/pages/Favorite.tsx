import React, { useState, useEffect, FC } from "react";

import { LoadingAnimation } from "../components/Loading";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { MovieType } from "../utils/types/movie";
import { useTitle } from "../utils/hooks/customHooks";
import Button from "../components/Button";

const Favorite = () => {
  useTitle("CInephile - My Favorite");
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const getFavorite = localStorage.getItem("FavMovie");
    if (getFavorite) {
      setDatas(JSON.parse(getFavorite));
    }
    setLoading(false);
  }

  function removeFavorite(data: MovieType) {
    let dupeDatas: MovieType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert(`Delete ${data.title} from favorite list`);
  }

  return (
    <Layout>
      <div>
        <h1 className="my-10 text-center text-5xl text-salte-900 text-black dark:text-white">
          Fav Movies
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
                  labelButton="REMOVE FROM FAVORITE"
                  onClickFav={() => removeFavorite(data)}
                />
              ))}
        </div>
        <div className="bg-zinc-500 p-2 font-bold text-white hover:bg-zinc-400/90 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90">
        <Button
          label="Load More"
        />
        </div>
      </div>
    </Layout>
  );
};

export default Favorite;
