import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="py-24">
            <div className="text-center">
                <h2 className="text-4xl mb-3 font-semibold">Welcome To Mihu's Kitchen</h2>
                <p>Learn how to cook your favorite menu </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div>
                    <p>Welcome. This is La Boom. Elegant & sophisticated restaurant template. Royal plate offers different home page layouts with smart and unique design, showcasing beautifully designed elements every restaurant website should have. Smooth animations, fast loading and engaging user experience are just some of , the features this template offers. So, give it a try and dive into a world of La Boom restaurant websites.</p>
                    <img src="https://laboom.sk-web-solutions.com/images/signature.png" alt="" />
                    <Link to="/about-us">
                        <button className="btn btn-natural px-8 mt-4 tracking-widest">Learn more</button>
                    </Link>

                </div>
                <div>
                    <img src="https://laboom.sk-web-solutions.com/images/img2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;