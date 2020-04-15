import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_STATUS = 'UPDATE_STATUS';

let initialState = {
    profile: null,
    postData: [
        {id: 1, message: 'my 1st post', likescount: 11},
        {id: 2, message: 'Sosisca io io mamka', likescount: 15},
        {id: 3, message: 'yoo niger', likescount: 1}
    ],
    status: ".."
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.message,
                likescount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            };
        }
        case UPDATE_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
};

export const addPost = (message) => ({type: ADD_POST, message});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
const setStatus = (status) => ({type: UPDATE_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => { // Thunk creator
    let response = await usersAPI.getProfile(userId);
        dispatch(setUserProfile(response.data));            // Data from API json
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);      // get status from server
        dispatch(setStatus(response.data));                 // update local state
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));                        // update local state
    }
};

export default profileReducer;