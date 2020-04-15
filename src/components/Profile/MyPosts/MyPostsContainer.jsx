import {addPost} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//let addPost = () => {   props.store.dispatch(addPostActionCreator());    };

let State_Props = (state) => {
    return {
        posts: state.profilePage.postData,
        postText: state.profilePage.newPostText
    }
};

let MyPostsContainer = connect(State_Props,{addPost})(MyPosts);

export default MyPostsContainer;