import React, { useEffect, useState } from 'react';
import Popular from './Popular';

const Populars = () => {
    const [populars, setPopulars] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setPopulars(data));
    }, []);

    const popularProduct = populars.filter(popular => popular.product_category === 'Popular Product');

    return (
        <div className='bg-white px-4 md:px-10'>
            {/* Heading & Button Section */}
            <div className='flex flex-wrap justify-between items-center py-5'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-medium'>
                    Popular Products
                </h1>
                <button className='btn btn-secondary text-sm sm:text-base px-4 py-2'>
                    View All
                </button>
            </div>

            {/* Responsive Product Grid with Card Size Fix */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {popularProduct.map(popular => (
                    <div className="w-full sm:w-[280px] md:w-[250px] lg:w-[300px] h-auto">
                        <Popular key={popular.id} popular={popular} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Populars;
