import React from 'react';
import delivery from '../../assets/home-delivery.png'
import handCash from '../../assets/hand-cash.png'
import fastDelivery from '../../assets/fast-delivery-removebg-preview.png'


const Facilities = () => {
    return (
        <div className='flex gap-5 px-10 my-15'>
            {/* facilities-1 */}
            <div className='flex flex-col items-center justify-center bg-base-200 shadow  rounded p-5'>
                <img className='w-40' src={delivery} alt="" />
                <h1 className='text-xl font-bold'>Home Delivery</h1>
                <p className='text-center pt-2'>Delivered as quickly as possible with care.</p>
            </div>
           {/* facilities-2 */}
            <div className='flex flex-col items-center justify-center bg-base-200 shadow  rounded p-5'>
                <img className='w-40' src={handCash} alt="" />
                <h1 className='text-xl font-bold'>Hand Cash Delivery</h1>
                <p className='text-center pt-2'>Cash on delivery is taken with hand cash payment.</p>
            </div>
            {/* facilities-3 */}
            <div className='flex flex-col items-center justify-center bg-base-200 shadow  rounded p-5'>
                <img className='w-40' src={fastDelivery} alt="" />
                <h1 className='text-xl font-bold'>Fast Shipping </h1>
                <p className='text-center pt-2'>Delivered as quickly as possible with care.</p>
            </div>
            {/* facilities-4 */}
            <div className='flex flex-col items-center justify-center bg-base-200 shadow  rounded p-5'>
                <img className='w-40' src={delivery} alt="" />
                <h1 className='text-xl font-bold'>Home Delivery</h1>
                <p className='text-center pt-2'>Delivered as quickly as possible with care.</p>
            </div>
        </div>
    );
};

export default Facilities;