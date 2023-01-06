// Constructor start
import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';

import { LoadingAnimation } from "../components/Loading";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { MovieType } from "../utils/types/movie";
import Carousel from "../components/Carousel";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
  page: number;
  totalPage: number;
}


export default class Index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
      page: 1,
      totalPage: 1,
    };
  }
  
  
  componentDidMount() {
    this.fetchData(1);
  }
  

  fetchData(page: number) {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1${page}`
      )
      .then((data) => {
        const { results, total_pages } = data.data;
        this.setState({ datas: results, totalPage: total_pages });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  nextPage() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  prevPage() {
    const newPage = this.state.page -1;
    this.setState({ page: newPage});
    this.fetchData(newPage);
  }

  handleFavorite(data: MovieType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      let parseFav: MovieType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Movie Added to Fav");
    }
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
                  ), url(https://image.tmdb.org/t/p/original${datas.poster_path}) `, 
                }}
              >
                <div className="hero-content text-center text-neutral-content">
                  <div className="maw-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{datas.title}</h1>
                    <p className="mb-5">{datas.overview}</p>
                  </div>
                </div>
              </div>
            )}
          />
        )}
        <div>
        <h1 className="my-10 text-center text-5xl text-salte-900 dak:text-white">
            Upcoming Movie
          </h1>
          <Carousel
            datas={this.state.datas.slice(0, 5)}
            content={(datas) => (
              <div
                className="carousel carousel-center rounded-box"
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
                  </div>
                </div>
              </div>
            )}
            />
        </div>
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
                    id={data.id}
                    labelButton="ADD TO FAVORITE"
                    onClickFav={() => this.handleFavorite(data)}
                  />
                ))}
          </div>
          <div className="btn-group w-full justify-center">
          <button
            className="btn"
            onClick={() => this.prevPage()}
            disabled={this.state.page === 1}
          >
            «
          </button>
          <button className="btn">{this.state.page}</button>
          <button
            className="btn"
            onClick={() => this.nextPage()}
            disabled={this.state.page === this.state.totalPage}
          >
            »
          </button>
        </div>
        </div>
         
      </Layout>
    );
  }
}
