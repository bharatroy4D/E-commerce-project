import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import { BiSolidCategory } from 'react-icons/bi';

const Categories = ({ handleFilterItem }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false); // Stop loading once data is fetched
            });
    }, []);

    if (loading) {
        return (
            <div className="w-full md:w-1/4 lg:w-1/5 rounded pl-5 bg-base-300 shadow">
                <h1 className="text-2xl font-bold pt-2 pb-4">Loading Categories...</h1>
                {/* You can use a spinner here */}
                <div className="flex justify-center mt-4">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-transparent border-blue-500"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full md:w-1/4 lg:w-1/5 xl:w-1/4 rounded pl-5 bg-base-300 shadow-xl">
            <h1 className="hidden md:inline-flex gap-2 items-center text-2xl font-bold pt-2 pb-4 ">
                <BiSolidCategory className="text-green-400" /> Categories
            </h1>
            <div className="space-y-4 ">
                {categories.map(category => (
                    <Category
                        key={category.id}
                        category={category}
                        handleFilterItem={handleFilterItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default Categories;
