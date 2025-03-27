import React from 'react';
import delivery from '../../assets/home-delivery.png'
import handCash from '../../assets/hand-cash.png'
import fastDelivery from '../../assets/fast-delivery-removebg-preview.png'
import helpSupport from '../../assets/help-support-removebg-preview.png'


const Facilities = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  my-15 border-t-2 border-green-600 border-dotted pt-10 mx-10 '>
            {/* facilities-1 */}
            <div className='flex flex-col items-center justify-center bg-base-300 shadow hover:bg-green-500 hover:text-white rounded p-5'>
                <img className='w-32' src={delivery} alt="" />
                <h1 className='text-xl font-bold'>Home Delivery</h1>
                <p className='text-center pt-2'>Delivered as quickly as possible with care.</p>
            </div>
           {/* facilities-2 */}
            <div className='flex flex-col items-center justify-center bg-base-300 shadow hover:bg-green-500 hover:text-white rounded p-5'>
                <img className='w-32' src={handCash} alt="" />
                <h1 className='text-xl font-bold'>Hand Cash Delivery</h1>
                <p className='text-center pt-2'>Cash on delivery is taken with hand cash payment.</p>
            </div>
            {/* facilities-3 */}
            <div className='flex flex-col items-center justify-center bg-base-300 shadow hover:bg-green-500 hover:text-white rounded p-5'>
                <img className='w-32' src={fastDelivery} alt="" />
                <h1 className='text-xl font-bold'>Fast Shipping </h1>
                <p className='text-center pt-2'>Delivered as quickly as possible with care.</p>
            </div>
            {/* facilities-4 */}
            <div className='flex flex-col items-center justify-center bg-base-300 shadow hover:bg-green-500 hover:text-white rounded p-5'>
                <img className='w-32' src={helpSupport} alt="" />
                <h1 className='text-xl font-bold'>Help & Supports</h1>
                <p className='text-center pt-2'>24-hour online assistance and support</p>
            </div>
        </div>
    );
};

export default Facilities;