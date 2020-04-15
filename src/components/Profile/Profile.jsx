import React from 'react';
import cs from'./Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={cs.content}>
            <div>
              <img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
    
            <div>
              <img width='120px' src='https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
              ava+description
            </div>

            <MyPostsContainer store={props.store}/>
        </div>
                       
        )
};

export default Profile;