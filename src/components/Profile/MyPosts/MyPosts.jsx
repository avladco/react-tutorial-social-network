import React from 'react';
import Post from './Post/Post';
import {MyPostsFormRedux} from "./MyPostsForm/MyPostsForm";

const MyPosts = React.memo(props => {
    let allPosts = props.posts.map((el, i) => <Post id={el.id} message={el.message} likescount={el.likescount}
                                                    key={i}/>);
    let addPost = (value) => {
        props.addPost(value.messageBody);
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <MyPostsFormRedux onSubmit={addPost}/>
                <div>
                    {allPosts}
                </div>
            </div>
        </div>
    )
});

export default MyPosts;