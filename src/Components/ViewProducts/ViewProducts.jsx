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
        <div className='border w-full rounded'>
            <h1>This a ViewProducts</h1>
            <div>
                {
                    viewProducts.map(viewProduct => <ViewProduct viewProduct={viewProduct}></ViewProduct>)
                }
            </div>
        </div>
    );
};

export default ViewProducts;