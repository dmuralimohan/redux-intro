import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addPost } from '../../store/posts/postsActions';

import './postform.page.css';

export const PostForm = () => {
    const dispatch = useDispatch();
    const defaultUser = {
        author: "",
        title: "",
        comment: ""
    }

    const [user, setUser] = useState(defaultUser);

    let handleChange = ({ target }) => {
        setUser(prev  => ({...prev, [target.name] : [target.value]}));
    }

    const handleSubmit = () => {
        dispatch(addPost(user));
        setUser(defaultUser);
    }

    return (
        <div className="form">
            <label htmlFor="name">
                Name
            </label>
            <input 
                type="text"
                id="name"
                name="author"
                value={user.author}
                onChange={ handleChange } 
            />
            <label htmlFor="title">
                Title
            </label>
            <input 
                type="text" 
                id="title" 
                name="title"
                value={user.title} 
                onChange={ handleChange } 
            />
            <label htmlFor="comment">
                Comment
            </label>
            <textarea 
                id="comment" 
                name="comment" 
                value={user.comment} 
                onChange={ handleChange }>
            </textarea>
            <button 
                type="submit" 
                onClick={ handleSubmit }>
                Submit
            </button>
        </div>
    );
};