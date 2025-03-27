import React from "react";
// import PropTypes from "prop-types";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoStar } from "react-icons/io5";

const ViewProduct = ({ viewProduct }) => {
  const { title, image, price } = viewProduct;

  return (
    <div className="bg-white shadow rounded-xl w-full hover:transform  hover:scale-105 hover:duration-1000 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      <div className="bg-base-100 rounded-xl p-4">
        <figure className="flex justify-center">
          <img
            className="h-40 w-40 object-contain rounded-md"
            src={image}
            alt={title}
          />
        </figure>
        <div className="mt-4">
          {/* Star Rating */}
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <IoStar key={index} />
            ))}
          </div>

          {/* Title and Price */}
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-sm font-medium truncate w-3/4">{title}</h1>
            <div className="flex items-center text-red-500 font-semibold">
              <BsCurrencyDollar />
              <p className="text-sm">{price.toFixed(2)}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button className="btn btn-primary text-xs px-4 sm:text-sm">
              Buy
            </button>
            <button className="btn  text-xs px-4 sm:text-sm">
              View
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

// ViewProduct.propTypes = {
//   viewProduct: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default ViewProduct;
