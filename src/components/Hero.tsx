import React, { Component } from "react";

interface HeroProps {
  title: string;
  image: string;
}

export default class Hero extends Component<HeroProps> {
  render() {
    return (
      <div
        className="hero min-h-[50vh] bg-no-repeat lg:bg-top d-none d-block"
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q719jXXEzOoYaps6babgKnONONX.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Kimi No nawa</h1>
            <p className="mb-5">
            High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.
            </p>
            <button className="btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90">SEE DETAIL</button>
          </div>
        </div>
      </div>
    );
  }
}
