import React from 'react';

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