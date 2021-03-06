import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';
import { Wave } from 'react-animated-text';
const Slider = () => {
    return (
        <section className="slider text-center -mt-20 text-white px-4">
            <p className="text-2xl text-primary font-medium">Cooking is Easy, We Will Prove it to You!</p>
            <p className="text-5xl font-bold"><Wave
                effect="verticalFadeIn"
                effectDirection="down"
                iterations="1"
                effectChange={2.0}
                text="Great Cooking Class For You" /></p>
            <p className="md:w-1/2 mt-6">It's all about FOOD.Check out my recipes and let me know what you think about it. A healthy and easy way for foodies out there and I hope you people have Fun! </p>
            <div className="flex md:gap-6 md:flex-row flex-col">
                <Link to="/services">
                    <button className="btn btn-success mt-8 tracking-widest px-8 ">Explore Cooking</button>
                </Link>
                <Link to="/blogs">
                    <button className="btn btn-outline btn-primary px-8 mt-8 tracking-widest">Check feedback</button>
                </Link>


            </div>
        </section>
    );
};

export default Slider;