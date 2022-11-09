import './Homepage.css';
import Content from '../components/Content';
import Table from '../components/Table';
import { useState, useEffect } from 'react';

function Homepage() {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch('https://kitsu.io/api/edge/trending/anime')
            .then((response) => response.json())
            .then((data) => {
                setAnimes(data);
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