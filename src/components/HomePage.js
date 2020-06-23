import React from 'react';
import Navbar from './navbar';
import NowPlay from './nowPlay';
import WeekMovie from './thisWeekMovies';
import ComingSoon from './comingSoon';
import Footer from './common/footer';
import Carousel from './carousel';
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <main style={{ marginTop: '150px' }}>
                <div className="container">
                    <h5>NOW PLAYING</h5>
                    <NowPlay />
                    <hr />
                    <h5>THIS WEEK OPEN</h5>
                    <WeekMovie />
                    <hr />
                    <h5>COMIN SOON...</h5>
                    <ComingSoon />
                    <hr />
                    <Carousel />
                </div>

                <Footer />
            </main>
        </div>
    );
};
export default HomePage;
