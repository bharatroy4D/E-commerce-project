import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const link =<>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/become">BECOME A SELLER</Link></li>
    <li><Link to="/help">HELP & SUPPORT</Link></li>
    <li><Link to="/my">MY CARD</Link></li>
    <li><Link to="/sign">SIGN UP</Link></li>
    </>
    
    return (
        <div>
            <div className='list'>
                {link}
            </div>
        </div>
    );
};

export default Navbar;