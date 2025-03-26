import React from 'react';

const Footer = () => {
    return (
        <div className='bg-pink-800'>
            <footer className="footer sm:footer-horizontal text-base-content p-10 bg-pink-200">
                <div className="footer flex flex-col sm:flex-row sm:grid sm:grid-cols-4 sm:gap-10 gap-8">
                    {/* Services Section */}
                    <nav>
                        <h6 className="footer-title font-bold">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>

                    {/* Company Section */}
                    <nav>
                        <h6 className="footer-title font-bold">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>

                    {/* Legal Section */}
                    <nav>
                        <h6 className="footer-title font-bold">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                    {/* Newsletter Section */}
                    <form>
                        <h6 className="footer-title font-bold">Newsletter</h6>
                        <fieldset className="w-80">
                            <label>Enter your email address</label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item"
                                />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
