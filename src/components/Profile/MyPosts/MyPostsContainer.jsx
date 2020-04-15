import React from 'react';
import {addPostActionCreator, postChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
/*
const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let postChange = (text) => {
        let action = postChangeActionCreator(text)
        props.store.dispatch(action);
    };

    return (<MyPosts addPost={addPost}
                    postChange={postChange}
                    posts={state.profilePage.postData}
                    postText={state.profilePage.newPostText} />
    )
};*/

let State_Props = (state) => {
    return {
        posts: state.profilePage.postData,
        postText: state.profilePage.newPostText
    }
};
let Dispatch_Props = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        postChange: (text) => {
            dispatch(postChangeActionCreator(text));
        }
    }
};

let MyPostsContainer = connect(State_Props, Dispatch_Props)(MyPosts);

export default MyPostsContainer;