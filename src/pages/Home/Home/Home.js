import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <Banner />
            <Footer />
        </div>
    );
};

export default Home;