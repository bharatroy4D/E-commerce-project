import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoStar } from 'react-icons/io5';
import { RiPriceTag3Fill } from 'react-icons/ri';

const Popular = ({ popular }) => {
    const { title, image, price } = popular;
    console.log(popular)
    return (
        <div className='bg-white'>
            <div className="bg-base-100 shadow-xl rounded-xl w-full">
                <figure>
                    <img className='h-80 p-5 rounded'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between '>
                        <div className='flex gap-1 text-yellow-400'>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>
                    </div>
                    <h2 className="card-title">
                        <div className='flex justify-between pb-2 w-full'>
                            <h1>{title}</h1>
                            <div className='flex text-red-500 gap-1 items-center'>
                                <BsCurrencyDollar />
                                <p>{price}</p>
                            </div>
                        </div>

                    </h2>
                    <div className="card-actions justify-between">
                        <button className='btn'>Add card</button>
                        <button className='btn  btn-secondary'>Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;