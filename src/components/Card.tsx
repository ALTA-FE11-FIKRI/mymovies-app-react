import { Component } from "react";

import Button from "./Button";
import { withRouter } from "../utils/navigation";

interface CardProps {
  title: string;
  image: string;
  id: number;
  labelButton: string;
  onClickFav?: () => void;
  navigate?: any;
  params?: any;
}

class Card extends Component<CardProps> {
  onClickDetail() {
    this.props.navigate(`/movie/${this.props.id}`);
  }

  render() {
    return (
      <div className="card-compact card rounded-lg bg-zinc-500 shadow-lg shadow-black dark:bg-base-100 transform transition duration-500 hover:z-20 hover:scale-110">
        <figure onClick={() => this.onClickDetail()}>
          <img
            className="aspect-auto object-contain"
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center justify-between text-center">
          <h2 className="card-title text-white"
          onClick={() => this.onClickDetail()}
          >{this.props.title}</h2>
          <div className="card-actions">
            <Button
              className="btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
              label={this.props.labelButton}
              onClick={this.props.onClickFav}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);