import React from 'react';

const Category = ({ category, handleFilterItem }) => {
    return (
        <div className="mb-4">
            <h1
                onClick={() => handleFilterItem(category)}
                className="flex items-center justify-center font-bold bg-white rounded shadow mb-5 py-2 px-4 mr-5 
                           hover:bg-green-400 hover:text-white transition-all duration-200 ease-in-out 
                           hover:scale-105 cursor-pointer 
                           text-xs sm:text-sm md:text-base lg:text-lg">
                {category.name}
            </h1>
        </div>
    );
};

export default Category;
