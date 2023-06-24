import React from 'react';
import { PostForm } from './postForm';
import { RecentPosts } from './RecentPosts';

export const Posts = () => {

    return (
        <div>
            <PostForm />
            <RecentPosts />
        </div>
    );
};