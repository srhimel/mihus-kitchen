import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../404.svg'

const NotFound = () => {
    return (
        <div className="container mx-auto text-center pb-24">
            <img className="lg:w-1/2 md:w-2/3 mx-auto" src={errorImg} alt="" />
            <p className="text-2xl font-bold">Uh-No! Nothing Here...</p>
            <Link to="/">
                <button className="uppercase py-2 px-6 mt-4 bg-indigo-600 text-white rounded-full tracking-wider shadow-lg">Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;