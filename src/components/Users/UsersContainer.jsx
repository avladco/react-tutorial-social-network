import React from 'react';
import Users from "./Users";
import {
    follow,
    unfollow,
    setCurrentPage,
    setCurrentPortion,
    setFollowingProgress,
    getUsers
} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged(pageNumber) {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        //   let pages = [ ]; for (let i=1; i <= pagesCount; i++) { pages.push(i); }
        return <>
            {this.props.loadingUsers ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged.bind(this)} {...this.props}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        currentPortion: state.usersPage.currentPortion,
        loadingUsers: state.usersPage.loadingUsers,
        followingProgress: state.usersPage.followingProgress
    }
};

/*
let dispatchProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        } . . .
    }
};*/

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setCurrentPortion,
    setFollowingProgress,
    getUsers
})(UsersContainer);
