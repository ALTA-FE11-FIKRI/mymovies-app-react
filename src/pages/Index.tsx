// Constructor start
import React, { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Button from "../components/Button";
import { LoadingAnimation } from "../components/Loading";

interface DatasType {
  id: number;
  title: string;
  poster_path: string;
  overview?: string;
}

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: DatasType[];
}

export default class Index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((data) => {
        const { results } = data.data;
        this.setState({ datas: results });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <Layout>
        {!this.state.loading && (
          <Hero
            datas={this.state.datas.slice(0, 5)}
            content={(datas) => (
              <div
                className="hero min-h-[50vh] bg-no-repeat lg:bg-top"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${datas.poster_path})`,
                }}
              >
                <div className="hero-content text-center text-neutral-content">
                  <div className="maw-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{datas.title}</h1>
                    <p className="mb-5">{datas.overview}</p>
                    <Button
                      className="btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
                      label="SEE DETAIL"
                    />
                  </div>
                </div>
              </div>
            )}
          />
        )}
        <div>
          <h1 className="my-10 text-center text-5xl text-salte-900 dak:text-white">
            Now playing
          </h1>

          <div className="m-2 grid grid-flow-row auto-rows-max grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4">
            {this.state.loading
              ? [...Array(20).keys()].map((data) => (
                  <LoadingAnimation key={data} />
                ))
              : this.state.datas.map((data) => (
                  <Card
                    key={data.id}
                    title={data.title}
                    image={data.poster_path}
                  />
                ))}
          </div>
        </div>
      </Layout>
    );
  }
}
