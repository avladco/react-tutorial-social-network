import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

    _state: {
        profilePage:{
            postData:  [
                {id: 1, message: 'my 1st post', likescount: 11},
                {id: 2, message: 'Sosisca io io mamka', likescount: 15},
                {id: 3, message: 'yoo niger', likescount: 1}
            ],
            newPostText: 'kamasutra.com'
        },
        dialogsPage:{
            dialogsData: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Grisha'},
                {id: 3, name: 'Vanea'},
                {id: 4, name: 'Jora'},
                {id: 5, name: 'Danik'},
                {id: 6, name: 'Jenea'}
            ],
            messagesData: [
                {id: 1, message: 'Yo Niger'},
                {id: 2, message: 'Sosisca io io mamka'},
                {id: 3, message: 'Asterix i Obeliks maza faka'},
                {id: 4, message: 'Sosi Noski u mastera Yoda niger'}
            ],
            newMessageText: ''
        }
    },
    _renderEntireTree() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action)

        this._renderEntireTree();
    }

}

export default store;
window.store = store;