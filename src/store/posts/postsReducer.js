//postReducer

import { produce } from 'immer';
import { generateUUId } from '../../common';

const initialState = {
    posts: [
        {   id:123, 
            author:"Abdulkalam",
            title: "Dream",
            comment:"Dreams. are not what you see in your sleep, dreams are those. that don't let you sleep."
        }
    ]
};

const handleAddPost = (draft, payload) => {
    payload.id = generateUUId();
    draft.posts.push(payload);
};

const stateHandlers = {
    ADD_POST: handleAddPost
}

const postsReducer = (state = initialState, {type, payload}) => {
    const handler = stateHandlers[type];
    return handler ? produce(state, draft => handler(draft, payload)): state;
}

export default postsReducer;