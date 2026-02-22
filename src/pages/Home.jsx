import React from 'react';
import DoItRight from './Home/DoItRight';
import Banner from './Home/Banner';
import NewDrops from './Home/NewDrops';
import Categories from './Home/categories';
import Reviews from './Home/Reviews';

const Home = () => {
    return (
        <div className=''>
          <DoItRight></DoItRight>
          <Banner></Banner >
          <NewDrops></NewDrops>
          <Categories></Categories>
          <Reviews></Reviews>
        </div>
    );
};

export default Home;