import React, { Component } from "react";
export class DetailMovie extends Component {
  render() {
    return (
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg")`,
        }}
      >
      <div className="flex h-full w-full flex-wrap items-center justify-center bg-gradient-to-t from-white p-6 dark:from-black">
        <div  className="card w-4/5 gap-4 bg-glass p-3 shadow-lg shadow-black background-blur-md lg:h-4/5 lg:card-side">
        <figure>
          <img className="h-3/5 w-2/5 place-self-center object-contain md:h-4/5 md:w-3/5" src="https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg" alt="/q719jXXEzOoYaps6babgKnONONX.jpg" />
        </figure>
        <div className="card-body justify-between">
          <div className="flex flex-col">
          <h1 className="text-center text-3xl font-bold text-black dark:text-white">Your Name.</h1>
          <p className="font-normal text-black dark:text-white">Runtime : <span className="font-normal text-black dark:text-white"></span> 106 minutes</p>
          <p className="Text-lg font-medium text-black dark:text-white">Release date : <span className="Text-lg font-medium text-black dark:text-white"></span> Friday, 26 August 2016</p>
          <p className="Text-lg font-medium text-black dark:text-white">Genre : <span className="Text-lg font-medium text-black dark:text-white"></span> Romance, Animation, Drama</p>
          <p className="Text-lg font-medium text-black dark:text-white">Language : <span className="Text-lg font-medium text-black dark:text-white"></span> ja</p>
          <p className="Text-lg font-medium text-black dark:text-white">Overview : <span className="Text-lg font-medium text-black dark:text-white"> High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki's body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.
          </span>
          </p>
          </div>
          <button className="btn bg-zinc-500 p-2 font-bold text-white hover:bg-zinc-700/90">Watch Now</button>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default DetailMovie;
