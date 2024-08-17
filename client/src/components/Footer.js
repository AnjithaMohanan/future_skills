import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 mt-10">
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
                {/* Abstract Section */}
                <div>
                    <h3 className="font-bold mb-4">Abstract</h3>
                    <ul>
                        <li><a  className=" hover:text-white">Branches</a></li>
                    </ul>
                </div>

                {/* Resources Section */}
                <div>
                    <h3 className="font-bold mb-4">Resources</h3>
                    <ul>
                        <li><a  className=" hover:text-white">Blog</a></li>
                        <li><a  className=" hover:text-white">Help Center</a></li>
                        <li><a className=" hover:text-white">Release Notes</a></li>
                        <li><a  className=" hover:text-white">Status</a></li>
                    </ul>
                </div>

                {/* Community Section */}
                <div>
                    <h3 className="font-bold mb-4">Community</h3>
                    <ul>
                        <li><a className=" hover:text-white">Twitter</a></li>
                        <li><a  className=" hover:text-white">LinkedIn</a></li>
                        <li><a  className="*: hover:text-white">Facebook</a></li>
                        <li><a  className=" hover:text-white">Dribbble</a></li>
                        <li><a className=" hover:text-white">Podcast</a></li>
                    </ul>
                </div>

                {/* Company Section */}
                <div>
                    <h3 className="font-bold mb-4">Company</h3>
                    <ul>
                        <li><a className="hover:text-white">About Us</a></li>
                        <li><a  className="hover:text-white">Careers</a></li>
                        <li><a  className="hover:text-white">Legal</a></li>
                        <div className='pt-6 '>
                        <h3 className="font-bold mb-4">Company</h3>
                        <li><a className=" hover:text-white">info@abstract.com</a></li>
                
                        </div>
                    
                    </ul>
                </div>
              
                

            </div>

           
        </footer>
    );
};

export default Footer;
