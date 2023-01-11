import { useSelector, useDispatch } from "react-redux";

import { setFavorites } from "utils/redux/reducers/reducer";
import { useTitle } from "utils/hooks/customHooks";
import { RootState } from "utils/types/redux";
import { MovieType } from "utils/types/movie";

import Layout from "components/Layout";
import Card from "components/Card";
import Button from "components/Button";

const Favorite = () => {
  const dispatch = useDispatch();
  useTitle("CInephile - My Favorite");
  const datas = useSelector((state: RootState) => state.data.favorites);
 

  function removeFavorite(data: MovieType) {
    let dupeDatas: MovieType[] = datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    dispatch(setFavorites(filterData));
    alert(`Delete ${data.title} from favorite list`);
  }

  return (
    <Layout>
      <div>
        <h1 className="my-10 text-center text-5xl text-salte-900 text-black dark:text-white">
          Fav Movies
        </h1>
        <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
          {datas.map((data) => (
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
