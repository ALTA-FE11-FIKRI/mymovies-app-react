// Constructor start
import React, { Component } from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Card, { PlayingMovie } from "../pages/PlayingMovie";
import { LoadingAnimation } from "../components/Loading";

interface DatasType {
  id: number;
  title: string;
  image: string;
}

export default class Index extends Component {
  state = {
    object: [],
    datas: [],
    loading: true,
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      this.setState({
        object: [
          {
            id: 1,
            title: "Kimi No Nawa",
            image:
              "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q719jXXEzOoYaps6babgKnONONX.jpg",
          },
        ],
        datas: [
          {
            id: 1,
            title: "Slumberland",
            image:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBbmCfZD28erkQBEdHlLxWLyHrFhZxyUgBEdWFctR1cvL0BNGL",
          },
          {
            id: 2,
            title: "AVATAR: THE WAY OF WATER",
            image: "https://cdn.cgv.id/uploads/movie/compressed/22032300.jpg",
          },
          {
            id: 3,
            title: "Creed III",
            image:
              "https://dx35vtwkllhj9.cloudfront.net/united-artists-releasing/creed-iii/images/regions/us/onesheet.jpg",
          },
          {
            id: 4,
            title: "Evil Dead Rise",
            image:
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSdWx1ZLk4lVoAlfDQiqkJdcfdKcOYy6fLxz2nR7UIRXmIK5Tnh",
          },
          {
            id: 5,
            title: "Shazam! Fury of the Gods",
            image:
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRxmyenlivieX0mD_g8x1nlUupzdzaR_7kT2cL75FjzHtIvlnD-",
          },
        ],
        loading: false,
      });
    }, 6000);
  }

  render() {
    return (
      <Layout>
        <div className="hero min-h-[50vh] bg-no-repeat lg:bg-top">
          {this.state.loading ? (
            <LoadingAnimation />
          ) : (
            this.state.object.map((data: DatasType) => (
              <Hero key={data.id} title={data.title} image={data.image} />
            ))
          )}
          ,
        </div>
        <h1 className="my-10 text-center text-5xl text-slate-900 dark:text-white">
          Now Playing
        </h1>

        <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
          {this.state.datas.map((data: DatasType) => (
            <PlayingMovie key={data.id} title={data.title} image={data.image} />
          ))}
        </div>
      </Layout>
    );
  }
}
