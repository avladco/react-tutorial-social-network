const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
        postData: [
            {id: 1, message: 'my 1st post', likescount: 11},
            {id: 2, message: 'Sosisca io io mamka', likescount: 15},
            {id: 3, message: 'yoo niger', likescount: 1}
        ],
        newPostText: 'kamasutra.com'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likescount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText

            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST})

export const postChangeActionCreator = (text) =>
    ({type:UPDATE_POST_TEXT, newText: text })

export default profileReducer;