import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const link =<>
    <li><Link to="/">Products</Link></li>
    <li><Link to="/become">Become a Seller</Link></li>
    <li><Link to="/help">Help & Support</Link></li>
    <li><Link to="/language">Language</Link></li>
    <li><Link to="/sign">Sign Up</Link></li>
    </>
    
    return (
        <div className='bg-blue-900'>
            <div className='list-none flex gap-7  pt-1 pb-6 px-10 justify-end'>
                {link}
            </div>
        </div>
    );
};

export default Navbar;