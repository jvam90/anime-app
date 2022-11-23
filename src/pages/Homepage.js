import "./Homepage.css";
import Content from "../components/Content";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import Anime from "../models/Anime";
import api from "../services/api";
const url = "https://kitsu.io/api/edge/trending/anime";

function Homepage() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api(url).then((res) => {
      let animeList = [];
      res.data.data.forEach((anime) => {
        const a = new Anime(
          anime.id,
          anime.attributes.titles.en,
          anime.attributes.averageRating,
          anime.attributes.description,
          anime.attributes.posterImage.tiny
        );
        animeList.push(a);
      });
      setAnimes(animeList);
    });
  }, []);

  return (
    <div className="container">
      <Content title="Trending Anime"></Content>
      <Table data={animes}></Table>
    </div>
  );
}

export default Homepage;
