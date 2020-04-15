import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';
const SET_CURRENT_PORTION = 'SET_CURRENT_PORTION';

let initialState = {
    users: [],
    pageSize: 8,
    usersCount: 0,
    currentPage: 1,
    currentPortion: 1,
    loadingUsers: true,
    followingProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                        if (el.id === action.userId) {
                            return {...el, followed: true}
                        }
                        return el;
                    }
                )
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                        if (el.id === action.userId) {
                            return {...el, followed: false}
                        }
                        return el;
                    }
                )
            };

        case SET_USERS:
            return {
                ...state, users: action.users
            };

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}

        }

        case SET_CURRENT_PORTION: {
            return {...state, currentPortion: action.portion}

        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, usersCount: action.totalCount}
        }

        case TOGGLE_PRELOADER: {
            return {...state, loadingUsers: action.preloader}
        }

        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.followingProgress             // boolean value
                    ? [...state.followingProgress, action.userId]       // add user id in followingProgress array
                    : state.followingProgress.filter(id => id !== action.userId) // delete user id from array
            }
        }

        default: {
            return state;
        }
    }
};

export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, pageNumber: currentPage});
export const setCurrentPortion = (portion) => ({type: SET_CURRENT_PORTION, portion});
export const setUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalUsersCount});
export const setPreloader = (preloader) => ({type: TOGGLE_PRELOADER, preloader});
export const setFollowingProgress = (followingProgress, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    followingProgress,
    userId
});

export const getUsers = (currentPage, pageSize) => {       // Thunk creator
    return async (dispatch) => {
        dispatch(setPreloader(true));     // Preloader on
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setPreloader(false));    // Preloader off
        dispatch(setUsers(data.items));               // Data from API json
        dispatch(setUsersCount(data.totalCount));     // Data from API json
    }
};

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(setFollowingProgress(true, userID));
    let response = await apiMethod(userID);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userID));
    }
    dispatch(setFollowingProgress(false, userID));
};

export const follow = (userID) => {       // Thunk creator
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userID, usersAPI.follow, followSucces);
    }
};

export const unfollow = (userID) => {       // Thunk creator
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userID, usersAPI.unFollow, unfollowSucces);
    }
};
export default usersReducer;