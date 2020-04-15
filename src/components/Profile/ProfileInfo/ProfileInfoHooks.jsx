import React, {useEffect, useState} from 'react';
import Preloader from "../../common/Preloader/Preloader";
import css from './ProfileInfo.module.css';
import profileLogo from "../../../assets/img/user.webp";

const ProfileInfoHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);   // useEffect will run only if [deps] will be changed.

    const activateEditMode = () => {
        setEditMode(true);                 // to input view
    };

    const deactivateEditMode = () => {
        setEditMode(false);               // to string view
        props.updateStatus(status);           // update global state
    };

    const onStatusChange = (e) => {                                 // update local state
        setStatus(e.currentTarget.value)
    };

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <div className={css.bg}>
                <img className={css.bgImage} alt=''
                     src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            <div className={css.bgInfo}>
                <img src={props.profile.photos.large ? props.profile.photos.large : profileLogo} alt=''
                     className={css.profilePhoto}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>

                <div>{
                    !editMode
                        ? <div><span onClick={activateEditMode}>{props.status || "no status"}</span></div>
                        : <div><input onBlur={deactivateEditMode}
                                      autoFocus={true}
                                      value={status}
                                      onChange={onStatusChange}/></div>
                }</div>
            </div>
        </>
    )
};

export default ProfileInfoHooks;