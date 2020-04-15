import React from 'react';
import s from "./Users.module.css";
import Paginator from "../common/Pagination/Pagination";
import User from "./User";

class Users extends React.Component {
    render() {
        return <div className={s.users}>
            <Paginator itemsCount={this.props.usersCount}
                       pageSize={this.props.pageSize} portionSize={15}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.props.onPageChanged}
                       currentPortion={this.props.currentPortion}
                       setCurrentPortion={this.props.setCurrentPortion}
                       />
            {this.props.users.map((user, i) =>
                <User userId={user.id} userName={user.name} status={user.status}
                      followed={user.followed} photo={user.photos.small}
                      follow={this.props.follow} unfollow={this.props.unfollow}
                      progress={this.props.followingProgress} key={i}/>)
            }
        </div>
    }
}

export default Users;