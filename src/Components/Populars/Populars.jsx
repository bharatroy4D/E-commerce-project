import React, { useEffect, useState } from 'react';
import Popular from './Popular';

const Populars = () => {
    const [populars, setPopulars] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setPopulars(data))
    }, [])
    const popularProduct = populars.filter(popular=> popular.product_category==='Popular Product')

    return (
        <div className='bg-white px-10'>
            <div className='flex justify-between items-center py-5'>
            <h1 className='flex gap-1 items-center text-3xl font-medium f'>
            Popular products </h1>
            <button className='btn btn-secondary'>View All</button>
            </div>
            <div className='flex justify-between gap-4'>
                {
                    popularProduct.map(popular=><Popular key={popular.id} popular={popular}></Popular>)
                }
            </div>
        </div>
    );
}; 

export default Populars;