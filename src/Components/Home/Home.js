import React, { useContext, useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import AboutSection from '../AboutSection/AboutSection';
import './Home.css';
import { ServiceContext } from '../../App';
import Service from '../Service/Service';
import Chef from '../Chef/Chef';
import Post from '../Post/Post';

const Home = () => {
    //service from Context API
    const services = useContext(ServiceContext);
    //Chef & Posts Fetch 
    const [chefs, setChefs] = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('./fakeChef.json')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    useEffect(() => {
        fetch('./fakePost.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <main>
            {/* Load Slider  */}
            <Slider />
            {/* About Section  */}
            <section className="about container m-auto px-4">
                <AboutSection />
            </section>
            {/* Service Section  */}
            <section className="services text-white py-24">
                <div className="container m-auto px-4">
                    <div className="text-center">
                        <h2 className="text-4xl mb-3 font-semibold">Explore Our Cooking Class</h2>
                        <p>Learn how to cook your favorite menu </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        {
                            services.slice(0, 3).map(service => <Service service={service} key={service.id}></Service>)
                        }
                    </div>
                </div>
            </section>
            {/* Chef Section  */}
            <section className="chef py-24 bg-white ">
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
            {/* Blog Section  */}
            <section className="blog py-24">
                <div className="container m-auto px-4">
                    <div className="text-center">
                        <h2 className="text-4xl mb-3 font-semibold">Feature Blog</h2>
                        <p>Read Latest Delicious Posts And News </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                        {
                            posts.slice(0, 3).map(post => <Post post={post} key={post.id}></Post>)
                        }
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;