import React from 'react';
import cs from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let allPosts = props.posts.map( el => <Post id={el.id} message={el.message} likescount={el.likescount}/> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let postChange = () => {
        let text = newPostElement.current.value;
        props.postChange(text)
    }

    return (     
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={ postChange } ref={newPostElement} value={props.postText}></textarea>
                    </div>

                    <div>
                        <button onClick={ addPost }> Add Post </button>
                    </div>

                    <div>
                        { allPosts }
                    </div>
                </div>
            </div>
        )
};

export default MyPosts;