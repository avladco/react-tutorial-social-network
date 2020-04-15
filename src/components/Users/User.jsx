import React from 'react';
import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import profileLogo from "./../../assets/img/user.webp";

const User = (props) => {
        let {userId, userName, status, followed, photo, follow, unfollow, progress} = props;

        return     <div key={userId} className={s.body}>
                    <div className={s.img}>
                        <div>
                            {followed
                                ? <button disabled={progress.some(id => id === userId)} onClick={() => {
                                    unfollow(userId)
                                }} className={`${s.follow} ${s.red}`}> Unfollow </button>
                                : <button disabled={progress.some(id => id === userId)} onClick={() => {
                                    follow(userId)
                                }} className={`${s.follow} ${s.green}`}> Follow </button>
                            }
                        </div>
                        <NavLink to={"/profile/" + userId}>
                            <img src={photo!= null ? photo: profileLogo} alt=""/>
                        </NavLink>
                    </div>
                    <div className={s.description}>
                        <div className={s.location}>
                            <span> {"City"} </span>,
                            <span> {"CO"} </span>
                        </div>
                        <div>
                            <div className={s.userName}> {userName} </div>
                            <div>" {status} "</div>
                        </div>
                    </div>
                </div>
};

export default User;