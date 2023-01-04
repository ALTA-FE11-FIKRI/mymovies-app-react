import React, { Component } from "react";

interface PlayingProps {
  title: string;
  image: string;
}

export class PlayingMovie extends Component<PlayingProps> {
  render() {
    return (
      
      <div className="card-compact card rounded-lg bg-zinc-500 shadow-lg shadow-black dark:bg-base-100 transform transition duration-500 hover:z-20 hover:scale-110">
        <figure className="px-10 pt-10">
          <img
            src={this.props.image}
            alt={this.props.title}
            className="rounded-xl"
          />

        </figure>
        <div className="card-body items-center justify-between text-center">
          <h2 className="card-title text-white">{this.props.title}</h2>
          <div className="card-actions">
            <button className="btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90">Add to Favorite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayingMovie;
