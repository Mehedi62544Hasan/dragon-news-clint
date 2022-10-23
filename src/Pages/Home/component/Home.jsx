import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../../Shared/NewsCard/NewsCard';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>This is home: {news.length}</h2>
            {
                news.map(nws => <NewsCard
                     key={nws._id}
                     news={nws}
                ></NewsCard>)
            }
        </div>
    );
};

export default Home;