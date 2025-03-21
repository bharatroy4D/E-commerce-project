import React from 'react';

const Category = ({category, handleFilterItem}) => {

    return (
        <div className=''>
            <h1 onClick={()=>handleFilterItem(category.name)} className='font-bold bg-white rounded shadow mb-5 py-2 px-3 mr-5 hover:bg-green-400 hover:text-white'>{category.name}</h1>
        </div>
    );
};

export default Category;