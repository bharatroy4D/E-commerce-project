import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoStar } from 'react-icons/io5';
import { RiPriceTag3Fill } from 'react-icons/ri';

const ViewProduct = ({ viewProduct }) => {
    const {title, image, price} = viewProduct;
    return (
        <div>
            <div className='bg-white'>
                <div className="bg-base-100 shadow-xl rounded-xl w-full h-72">
                    <figure className='h-40 mx-auto pt-2 rounded'>
                        <img className='h-40 w-40 mx-auto rounded'
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
                                <h1 className='text-sm'>{title}</h1>
                                <div className='flex text-red-500 gap-1 items-center'>
                                    <BsCurrencyDollar />
                                    <p className='text-sm'>{price}</p>
                                </div>
                            </div>

                        </h2>
                        <div className="card-actions justify-between mb-2 ">
                            <button className='btn text-xs'>Add card</button>
                            <button className='btn  btn-secondary text-xs'>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;