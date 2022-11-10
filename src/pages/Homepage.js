import './Homepage.css';
import Content from '../components/Content';
import Table from '../components/Table';
import { useState, useEffect } from 'react';
import Anime from '../models/Anime';

function Homepage() {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch('https://kitsu.io/api/edge/trending/anime')
            .then((response) => response.json())
            .then((data) => {
                let animeList = [];
                
                data.data.forEach(anime => {
                    const a = new Anime(anime.attributes.titles.en, anime.attributes.averageRating, anime.attributes.description);
                     animeList.push(a);
                });
                setAnimes(animeList);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div className='container'>
            <Content title="Trending Anime"></Content>
            <Table data={animes}></Table>
        </div>
    )
}

export default Homepage;