import React, { useEffect, useState } from 'react';
import ViewProduct from '../ViewProduct/ViewProduct';

const ViewProducts = ({ filterItem }) => {
    const [viewProducts, setViewProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setViewProducts(data))
    }, [])

    const viewProductFilter = filterItem.name ? viewProducts.filter(product => product.category === filterItem.name) : viewProducts;

    return (
        <div className='w-full rounded'>
            {/* Responsive Grid Layout */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {
                    viewProductFilter.map(viewProduct => (
                        <ViewProduct key={viewProduct.id} viewProduct={viewProduct} />
                    ))
                }
            </div>
        </div>
    );
};

export default ViewProducts;
