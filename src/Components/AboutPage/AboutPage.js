import React, { useEffect, useState } from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Chef from '../Chef/Chef';

const AboutPage = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('./fakeChef.json')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className="bg-white">
            <div className="container m-auto px-4">
                <AboutSection />

            </div>
            <div className="chef py-24 bg-base-100">
                <div className="container m-auto px-4">
                    <div className="text-center">
                        <h2 className="text-4xl mb-3 font-semibold">Our Awesome Chef</h2>
                        <p>Meet Professional Cook Team </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8 mt-36">
                        {
                            chefs.map(chef => <Chef chef={chef} key={chef.id}></Chef>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;