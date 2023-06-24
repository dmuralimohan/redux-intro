import React from 'react';

import { useSelector } from 'react-redux';

import { getPosts } from '../../store/posts/postsSelector';

import './recentpost.page.css';

const PostMaker = ({id, title, author, content}) => {
    return (
        <div 
            poster-id={id}
            className="post"
        >
            <h2>{title}</h2>
            <p>{content}</p>
            <span>{author}</span>
        </div>
    )
}
export const RecentPosts = () => {
    const recentPosts = useSelector(getPosts);

    return (
        <div className="recent-posts">
            <h2>Recent Posts</h2>
            {
                recentPosts && recentPosts.map(post => {
                    return (
                        <PostMaker 
                            id={post.id}
                            key={post.id}
                            author={post.author} 
                            title={post.title} 
                            content={post.comment} 
                        />
                    );
                })
            }
        </div>
    );
};