import React, { useEffect, useState } from 'react';
import ViewProduct from '../ViewProduct/ViewProduct';

const ViewProducts = () => {
    const [viewProducts, setViewProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setViewProducts(data))
    }, [])

    return (
        <div className='w-full rounded'>
            <div className='grid grid-cols-4 gap-3'>
                {
                    viewProducts.map(viewProduct => <ViewProduct viewProduct={viewProduct}></ViewProduct>)
                }
            </div>
        </div>
    );
};

export default ViewProducts;