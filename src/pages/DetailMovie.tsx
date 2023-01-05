import React, { Component } from "react";
import moment from "moment";

import { LoadingAnimation } from "../components/Loading";
import Layout from "../components/Layout";
import Button from "../components/Button";

type GenreType = {
  id?: number;
  name?: string;
};

interface DataType {
  id?: number;
  title?: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
  runtime?: number;
  genres?: GenreType[];
}

interface PropsType {}

interface StateProps {
  loading: boolean;
  data: DataType;
}
export default class DetailMovie extends Component<PropsType, StateProps> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/683328?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <LoadingAnimation />
        ) : (
          <div className="w-full bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${this.state.data.poster_path}")`,
          }}>
            <div className="flex h-full w-full flex-wrap items-center justify-center bg-gradient-to-t from-white p-6 dark:from-black">
              <div className="card w-4/5 gap-4 bg-glass p-3 shadow-lg shadow-black backdrop-blur-md lg:h-4/5 lg:card-side">
            <img
            className="h-3/5 w-2/5 place-self-center object-contain md:h-4/5 md:w-3/5"
              src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
              alt={this.state.data.title}
            />
            <div className="card-body justify-between">
            <div className="flex flex-col">
              <p className="text-center text-3xl font-bold text-black dark:text-white">{this.state.data.title}</p>
              <p className="text-lg font-medium text-black dark:text-white">Runtime: {this.state.data.runtime}</p>
              <p className="text-lg font-medium text-black dark:text-white">Release Date:{" "}
              {moment(this.state.data.release_date).format("DD MMMM YYYY")}
              </p>
              <p className="text-lg font-medium text-black dark:text-white">
                Genre:{" "}
                {this.state.data.genres
                  ?.map((genre) => {
                    return genre.name;
                  })
                  .join(", ")}
              </p>
              <p className="text-lg font-medium text-black dark:text-white">Overview: {this.state.data.overview}</p>
            </div>
            <Button
              className="btn bg-zinc-500 p-2 font-bold text-white hover: bg-zinc-400/90 dark:bg-zinc-800 dark:hover:bg-zinc-700/90"
              label="WATCH NOW"
            />
            </div>
          </div>
          </div>
          </div>
        )}
      </Layout>
    );
  }
}
