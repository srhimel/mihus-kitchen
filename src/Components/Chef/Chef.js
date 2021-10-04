import React from 'react';
import './chef.css'

const Chef = (props) => {
    const { img, name, designation } = props.chef;
    return (
        <div>
            <div class="chef-blog" style={{ height: '333px' }}>
                <div class="chef-inner">
                    <div class="chef-member" style={{ height: '350px' }}>
                        <img src={img} alt="" />
                    </div>
                    <div class="chef-info">
                        <h5 className="text-lg font-medium">{name}</h5>
                        <span className="text-sm">{designation}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;