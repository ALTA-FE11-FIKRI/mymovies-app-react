import { useNavigate } from "react-router-dom";
import { FC } from "react";

import Button from "./Button";

interface CardProps {
  title?: string;
  image?: string;
  id?: number;
  labelButton?: string;
  onClickFav?: () => void;
};

const Card: FC<CardProps> = ({ id, image, title, labelButton, onClickFav }) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="card-compact card rounded-lg-md-sm bg-white shadow-lg-sm shadow-black dark:bg-zinc-900 transform transition duration-500 hover:z-20 hover:scale-110">
        <figure onClick={() => onClickDetail()}>
          <img
            className="aspect-auto object-contain"
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={title}
          />
        </figure>
        <div className="card-body items-center justify-between text-center">
          <h2 className="card-title text-black dark:text-white"
          onClick={() => onClickDetail()}
          >{title}</h2>
          <div className="card-actions">
            <Button
              className="btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
              label={labelButton}
              onClick={onClickFav}
            />
          </div>
        </div>
      </div>
    );
};

export default Card;