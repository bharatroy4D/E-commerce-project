import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoStar } from 'react-icons/io5';

const Popular = ({ popular }) => {
    const { title, image, price } = popular;

    return (
        <div className="bg-white w-full max-w-[350px] mx-auto rounded-xl shadow-md overflow-hidden hover:border hover:border-green-600">
            {/* Product Image */}
            <figure className="w-full h-[200px] sm:h-[250px] md:h-[280px]">
                <img
                    className="w-full h-full object-cover p-3 rounded-lg"
                    src={image}
                    alt={title}
                />
            </figure>

            {/* Card Content */}
            <div className="p-4">
                {/* Star Ratings */}
                <div className="flex justify-start text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <IoStar key={i} />
                    ))}
                </div>

                {/* Product Title & Price */}
                <h2 className="text-lg sm:text-xl font-semibold flex justify-between items-center">
                    {title}
                    <span className="flex text-red-500 items-center gap-1 text-sm md:text-base">
                        <BsCurrencyDollar />
                        {price}
                    </span>
                </h2>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
                    <button className="btn w-full sm:w-auto btn-primary">Add to Cart</button>
                    <button className="btn w-full sm:w-auto btn-secondary">View Product</button>
                </div>
            </div>
        </div>
    );
};

export default Popular;
