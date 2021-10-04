import React from 'react';

const Service = (props) => {
    const { img, service, fee, duration } = props.service;
    return (
        <div className="text-center border p-5 rounded-2xl shadow-lg">
            <img className="inline-block w-full" src={img} alt="" />
            <p className="text-xl mt-3">{service}</p>
            <div className="flex justify-between mt-4">
                <div className="flex gap-2 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{fee} Taka</span></div>
                <div className="flex gap-2 bg-success px-2 rounded-full text-white items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
                        {duration}/Months</span>
                </div>
            </div>
        </div>
    );
};

export default Service;