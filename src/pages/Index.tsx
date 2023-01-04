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
            image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q719jXXEzOoYaps6babgKnONONX.jpg",
          }
        ],
        datas: [
          {
            id: 1,
            title: "Avengers 1",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: 2,
            title: "Avengers 2",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: 3,
            title: "Avengers 3",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: 4,
            title: "Avengers 4",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: 5,
            title: "Avengers 5",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
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
            ) )
           )},
        </div>

        <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
          {this.state.datas.map((data: DatasType) => (
              <PlayingMovie key={data.id} title={data.title} image={data.image} />
            ))}
        </div>
      </Layout>
    );
  }
}
