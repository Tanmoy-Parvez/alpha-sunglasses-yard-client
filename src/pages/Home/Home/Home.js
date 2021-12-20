import React from 'react';
import About from '../../About/About';
import ContactForm from '../../ContactForm/ContactForm';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <Banner />
            <Products />
            <Reviews />
            <Blogs />
            <About />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;