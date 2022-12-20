import "./MyStuffPage.css";
import Content from "../components/Content";
import MyStuffTable from "../components/MyStuffTable";
import { useState, useEffect } from "react";
import api from "../services/api";
const url = "http://localhost:3333/anime";

function MyStuffPage() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api(url).then((res) => {
      let animeList = [];
      res.data.forEach((anime) => {
        const a = {
          id: anime.id,
          name: anime.name,
          type: anime.type,
          progress: anime.progress,
        };
        animeList.push(a);
      });
      setAnimes(animeList);
    });
  }, []);

  return (
    <div className="container">
      <Content title="What i'm watching"></Content>
      {<MyStuffTable data={animes}></MyStuffTable>}
    </div>
  );
}

export default MyStuffPage;
