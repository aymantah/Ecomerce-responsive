import React from 'react'
import Nav from '../comp/Nav';
import BestSale from '../comp/BestSale';
import RightCart from '../comp/RightCart';
import Slider from '../comp/Slider';
import TopCategory from '../comp/TopCategory';
import Popular1 from '../comp/Popular1';
import Popular2 from '../comp/Popular2';
import Popular3 from '../comp/Popular3';
import Brands from '../comp/Brands';
import Footer from '../comp/Footer';


function Home() {
    return (
    <div className="MainDiv">
        <Nav />
        <div class="cart-bg-overlay"></div>
        <RightCart />
        <Slider />
        <TopCategory />
        <BestSale />
        <Popular1 />
        <Popular2 />
        <Popular3 />
        <Brands />
        <Footer />        
    </div>
    );
}

export default Home;