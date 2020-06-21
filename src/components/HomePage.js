import React from 'react';
import Navbar from './navbar';
import NowPlay from './nowPlay';
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <main style={{ marginTop: '150px' }}>
                <div className="container">
                    <h5>NOW PLAYING</h5>
                    <NowPlay />
                </div>
            </main>
        </div>
    );
};
export default HomePage;
