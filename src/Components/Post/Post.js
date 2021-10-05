import React from 'react';

const Post = (props) => {
    const { img, postTitle, postDescription, admin, comments, published } = props.post;
    return (
        <article className="bg-white p-4 rounded-2xl">
            <div className="post-img relative">
                <img src={img} alt="" className="w-full" />
                <p className="absolute top-3 right-3 text-lg font-bold w-20 rounded-2xl text-center bg-black py-2 px-3 text-white">{published}</p>
            </div>
            <div className="post-description">
                <div className="flex gap-20 mt-4">
                    <p className="flex gap-2 text-primary-focus">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {admin}</p>
                    <p className="flex gap-2 text-primary-focus"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                        {comments + ' Comments'}</p>
                </div>
                <p className="text-xl font-medium mt-2 mb-2">{postTitle}</p>
                <p>{postDescription.slice(0, 200)}... <span className="text-primary-focus font-medium cursor-pointer">Read More </span></p>

            </div>
        </article>
    );
};

export default Post;