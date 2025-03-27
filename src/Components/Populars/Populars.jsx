import React, { useEffect, useState } from 'react';
import Popular from './Popular';

const Populars = () => {
    const [populars, setPopulars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data and handle loading/error states
        fetch('products.json')
            .then(res => {
                if (!res.ok) throw new Error('Failed to load products');
                return res.json();
            })
            .then(data => {
                setPopulars(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const popularProduct = populars.filter(popular => popular.product_category === 'Popular Product');

    // Loading and Error handling
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='bg-white px-4 md:px-10'>
            {/* Heading & Button Section */}
            <div className='flex flex-wrap justify-between items-center py-5'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>
                    Popular Products
                </h1>
                <button 
                    className='btn btn-secondary text-sm sm:text-base px-4 py-2'
                    // Add your View All functionality here
                    onClick={() => alert('View All functionality needs to be implemented')}
                >
                    View All
                </button>
            </div>

            {/* Responsive Product Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                {popularProduct.map(popular => (
                    <div key={popular.id} className="w-full h-auto">
                        <Popular popular={popular} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Populars;
