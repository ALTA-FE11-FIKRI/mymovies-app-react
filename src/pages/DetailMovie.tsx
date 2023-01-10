import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";

import { LoadingAnimation } from "../components/Loading";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { MovieType, VideoType } from "../utils/types/movie";
import { useTitle } from "../utils/hooks/customHooks";
import Button from "../components/Button";

const DetailMovie = () => {
  const { id_movie } = useParams();
  const [data, setData] = useState<MovieType>([]);
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useTitle(`${data.title} - Cinephile`);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=videos`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setVideos(data.videos?.results);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <div
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/w500${data.poster_path}")`,
            }}
          >
            <div className="flex h-full w-full flex-wrap items-center justify-center bg-gradient-to-t from-white p-6 dark:from-black">
              <div className="card w-4/5 gap-4 bg-glass p-3 shadow-lg shadow-black backdrop-blur-md lg:h-4/5 lg:card-side">
                <img
                  className="h-3/5 w-2/5 place-self-center object-contain md:h-4/5 md:w-3/5"
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt={data.title}
                />
                <div className="card-body justify-between">
                  <div className="flex flex-col">
                    <p className="text-center text-3xl font-bold text-black dark:text-white">
                      {data.title}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Runtime: {data.runtime}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Release Date:{" "}
                      {moment(data.release_date).format("DD MMMM YYYY")}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Genre:{" "}
                      {data.genres
                        ?.map((genre) => {
                          return genre.name;
                        })
                        .join(", ")}
                    </p>
                    <p className="text-lg font-medium text-black dark:text-white">
                      Overview: {data.overview}
                    </p>
                  </div>
                  <Button
                    className="btn bg-zinc-500 p-2 font-bold text-white hover:bg-zinc-400/90 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90"
                    label="WATCH NOW"
                  />
                </div>
              </div>
            </div>
          </div>
          <Hero
            datas={videos.slice(0, 5)}
            content={(data) => (
              <iframe
                width="100%"
                height="380"
                src={`https://www.youtube.com/embed/${data.key}`}
                title={data.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          />
        </>
      )}
    </Layout>
  );
};

export default DetailMovie;
