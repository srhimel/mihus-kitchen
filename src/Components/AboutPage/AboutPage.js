import React, { useEffect, useState } from 'react';
import AboutSection from '../AboutSection/AboutSection';
import Chef from '../Chef/Chef';

const AboutPage = () => {
    //fetch chef data
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('./fakeChef.json')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <main className="bg-white">
            {/* About Section  */}
            <section className="container m-auto px-4">
                <AboutSection />
            </section>
            {/* Chef Section  */}
            <section className="chef py-24 bg-base-100">
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

            </section>
        </main>
    );
};

export default AboutPage;