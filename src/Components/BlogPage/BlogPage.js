import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const BlogPage = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('./fakePost.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div className="py-20">
            <div className="container m-auto px-4">
                <div className="grid  md:grid-cols-3 gap-8">
                    {
                        posts.map(post => <Post post={post} key={post.id}></Post>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogPage;