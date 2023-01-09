import React, { useState, useEffect, FC } from "react";

import { LoadingAnimation } from "../components/Loading";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { MovieType } from "../utils/types/movie";
import { useTitle } from "../utils/hooks/cHooks";

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
      <div className="grid grid-cols-4 gap-3 p-3">
        {loading
          ? [...Array(20).keys()].map((data) => <LoadingAnimation key={data} />)
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
    </Layout>
  );
};

export default Favorite;