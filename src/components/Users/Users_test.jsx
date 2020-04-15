import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import user from './../../assets/img/user.webp';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then( response => { props.setUsers(response.data.items )});
            /*props.setUsers([
                {
                    id: 1,
                    photoUrl: 'data:image/jpeg;base64,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',
                    followed: false,
                    fullName: 'Alex Sasisi',
                    status: 'Zdarova patani!',
                    location: {city: 'Calarasi', country: 'RO'}
                },
                {
                    id: 2,
                    photoUrl: 'https://i.pinimg.com/originals/1c/6b/54/1c6b54ef1d6ba10c41f7e217a2ff2299.jpg',
                    followed: true,
                    fullName: 'Roma Muli',
                    status: 'Eu asa oleaca, cu Rodicuta',
                    location: {city: 'Orihei', country: 'MD'}
                },
                {
                    id: 3,
                    photoUrl: 'https://lyricstranslate.com/files/styles/large/public/Screenshot%202018-01-17%20at%2003.26.34.png?itok=Ya3fM29J',
                    followed: true,
                    fullName: 'Felix Gamuncul',
                    status: 'Aliexpress rulit',
                    location: {city: 'Chisington', country: 'MD'}
                },
                {
                    id: 4,
                    photoUrl: 'https://i.ytimg.com/vi/S6bQibFNs2E/maxresdefault.jpg',
                    followed: false,
                    fullName: 'Vanea K',
                    status: 'i will fuck your wife',
                    location: {city: 'Kiev', country: 'UKR'}
                },
                {
                    id: 5,
                    photoUrl: 'https://cs4.pikabu.ru/images/big_size_comm/2015-05_2/14310152416223.png',
                    followed: true,
                    fullName: 'Vergi Twister',
                    status: 'Pampaseli asta-i lux',
                    location: {city: 'Chisinau', country: 'MD'}
                },
                {
                    id: 6,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWd7waCObTcewMa0iUkL-WZv23kshOZxdH3DTaUOHzadQ0SJJJA&s',
                    followed: true,
                    fullName: 'Danu Rasistu',
                    status: 'Horoshii niger, mertvii niger',
                    location: {city: 'Bucharest', country: 'RO'}
                },
                {
                    id: 7,
                    photoUrl: 'https://i1.sndcdn.com/artworks-000176843744-xziit4-t500x500.jpg',
                    followed: false,
                    fullName: 'Ioel Luxosu',
                    status: 'Brat, asta-i alta clasa',
                    location: {city: 'Iasi', country: 'RO'}
                },
                {
                    id: 8,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xAzXcd9ZhwcsKMVJScUfMm6q0m5nonx5m3Yod2CIvNLI0wNUoA&s',
                    followed: true,
                    fullName: 'Valerka Gaina',
                    status: 'Ma duc pana la Nicoleta-Lux',
                    location: {city: 'Chisinau', country: 'MD'}
                },

            ])  */
        }
    };

    return <div className={s.users}>
        <button onClick={getUsers}>Users</button>
  {
    props.users.map( el => <div key={el.id} className={s.body}>
            <div className={s.img}>
                <div>
                    {el.followed
                        ? <button onClick={() => {props.unfollow(el.id)}} className={`${s.follow} ${s.red}`} > Unfollow </button>
                        : <button onClick={() => {props.follow(el.id)}} className={`${s.follow} ${s.green}`}  > Follow </button>
                    }
                </div>
                <img src={el.photos.small != null ? el.photos.small : user} alt=""/>
            </div>
            <div className={s.description}>
                <div className={s.location}>
                    <span> {"City"} </span>,
                    <span> {"CO"} </span>
                </div>
                <div>
                    <div className={s.userName}> {el.name} </div>
                    <div>" {el.status} "</div>
                </div>
            </div>
    </div> )
  }
    </div>

};

export default Users;