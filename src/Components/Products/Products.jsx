import React from 'react';
import Slider1 from '../../assets/slider-1.png'
import Slider2 from '../../assets/slider-2.jpg'
import Slider3 from '../../assets/slider-3.jpg'
import Slider4 from '../../assets/slider-4.png'
import Hero from '../Hero/Hero';
import Populars from '../Populars/Populars';
import Categories from '../Categories/Categories';
import ViewProducts from '../ViewProducts/ViewProducts';

const Products = () => {
    return (
        <div>
            <Hero></Hero>
            <Populars />
            <div className='flex gap-6 px-10 my-14'>
                <Categories />
                <ViewProducts />
            </div>
        </div>
    );
};

export default Products;