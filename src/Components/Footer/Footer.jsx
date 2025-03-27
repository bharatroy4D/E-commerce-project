import React from 'react';

const Footer = () => {
    return (
        <div className="bg-pink-800 ">
            <footer className="text-base-content p-10 bg-pink-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Services Section */}
                    <nav className="flex flex-col">
                        <h6 className="footer-title font-bold">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>

                    {/* Company Section */}
                    <nav className="flex flex-col">
                        <h6 className="footer-title font-bold">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>

                    {/* Legal Section */}
                    <nav className="flex flex-col">
                        <h6 className="footer-title font-bold">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>

                    {/* Newsletter Section */}
                    <form className="flex flex-col">
                        <h6 className="footer-title font-bold">Newsletter</h6>
                        <fieldset className="max-w-sm">
                            <label htmlFor="email">Enter your email address</label>
                            <div className="join">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item w-full"
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
