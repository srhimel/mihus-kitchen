import React, { useContext } from 'react';
import { ServiceContext } from '../../App';
import Service from '../Service/Service';

const ServicePage = () => {
    const services = useContext(ServiceContext);
    return (
        <main className="py-20 bg-white">
            <section className="container m-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl mb-3 font-semibold">Explore Our Cooking Class</h2>
                    <p>Learn how to cook your favorite menu </p>
                </div>
                <div className="grid  md:grid-cols-3 gap-8 mt-10">
                    {
                        services.map(service => <Service service={service} key={service.id}></Service>)
                    }
                </div>
            </section>
        </main>
    );
};

export default ServicePage;