import React from 'react';
import cs from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={cs.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} getStatus={props.getStatus}
            loggedUserId={props.loggedUserId} savePhoto={props.savePhoto}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
};
export default Profile;