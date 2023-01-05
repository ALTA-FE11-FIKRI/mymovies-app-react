import { Component } from "react";

import Button from "./Button";

interface CardProps {
  title: string;
  image: string;
}

export default class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card-compact card rounded-lg bg-zinc-500 shadow-lg shadow-black dark:bg-base-100 transform transition duration-500 hover:z-20 hover:scale-110">
        <figure>
          <img
            className="aspect-auto object-contain"
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center justify-between text-center">
          <h2 className="card-title text-white">{this.props.title}</h2>
          <div className="card-actions">
            <Button
              className="btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
              label="Add Favorite"
            />
          </div>
        </div>
      </div>
    );
  }
}
