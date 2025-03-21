import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import { BiSolidCategory } from 'react-icons/bi';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className=' w-1/4 rounded pl-5 bg-base-300 shadow-xl'>
            <h1 className='flex gap-2 items-center text-2xl font-bold pt-2 pb-4'><BiSolidCategory className='text-green-400'/>
            Categories </h1>
            <div>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;