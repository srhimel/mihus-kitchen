import React from 'react';
import './chef.css'

const Chef = (props) => {
    const { img, name, designation } = props.chef;
    return (
        <div>
            <div className="chef-blog md:mt-0 mt-20" style={{ height: '333px' }}>
                <div className="chef-inner">
                    <div className="chef-member" style={{ height: '350px' }}>
                        <img src={img} alt="" />
                    </div>
                    <div className="chef-info" >
                        <h5 className="text-lg font-medium">{name}</h5>
                        <span className="text-sm">{designation}</span>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Chef;