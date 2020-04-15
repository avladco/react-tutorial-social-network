const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [ ],
    pageSize: 5,
    usersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el;
                    }
                )
            };

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map( el => {
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
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, usersCount: action.totalCount / 100}
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ({type:FOLLOW, userId});
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId});
export const setUsersAC = (users) => ({type:SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, pageNumber: currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalUsersCount });




export default usersReducer;