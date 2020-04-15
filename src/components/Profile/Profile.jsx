import React from 'react';
import cs from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoHooks from "./ProfileInfo/ProfileInfoHooks";

const Profile = (props) => {
    return (
        <div className={cs.content}>
            <ProfileInfoHooks profile={props.profile} status={props.status} updateStatus={props.updateStatus} getStatus={props.getStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
};
export default Profile;