import React from 'react';
import cs from'./Post.module.css';

const Post = (props) => {
    return (
        <div>
            <span>
                { props.message } <br/>
                { props.likescount} - likes
            </span>
        </div>
        )
};

export default Post;