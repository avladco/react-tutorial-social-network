import React from 'react';
import * as axios from "axios";
import s from "./Users.module.css";
import user from "../../assets/img/user.webp";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);               // Data from API json
                this.props.setUsersCount(response.data.totalCount);     // Data from API json
            });
    }

    onPageChanged (pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        console.log(this.props)
        let pagesCount = Math.ceil(this.props.usersCount / this.props.pageSize);
        let pages = [ ];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }
        console.log(pagesCount)

        return <div className={s.users}>
            <div>
                { pages.map( p => {
                    return <span //className={this.props.currentPage === p && s.selectedPage}
                                 onClick={(e)=>{this.onPageChanged(p)}}> {p} </span>
                })  }
            </div>
            {
                this.props.users.map(el => <div key={el.id} className={s.body}>
                    <div className={s.img}>
                        <div>
                            {el.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(el.id)
                                }} className={`${s.follow} ${s.red}`}> Unfollow </button>
                                : <button onClick={() => {
                                    this.props.follow(el.id)
                                }} className={`${s.follow} ${s.green}`}> Follow </button>
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
                </div>)
            }
        </div>


    }
}

export default Users;