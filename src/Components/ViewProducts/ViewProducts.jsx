import React, { useEffect, useState } from 'react';
import ViewProduct from '../ViewProduct/ViewProduct';

const ViewProducts = ({ filterItem }) => {
    const [viewProducts, setViewProducts] = useState([]);
    // console.log(viewProducts);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setViewProducts(data))
    }, [])
    const viewProductFilter = filterItem ? viewProducts.filter(product => product.category === filterItem) : viewProducts

    return (
        <div className='w-full rounded'>
            <div className='grid grid-cols-4 gap-3'>
                {
                    viewProductFilter.map(viewProduct => <ViewProduct viewProduct={viewProduct}></ViewProduct>)
                }
            </div>
        </div>
    );
};

export default ViewProducts;