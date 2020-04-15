const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newTextBody
            };

        }
        case SEND_MESSAGE: {
            let bodyText = state.newMessageText;
            return  {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 5, message: bodyText}]
            };
        }
        default:
            return state;

    }
};

export const messageChangeActionCreator = (text) =>
    ({type:UPDATE_MESSAGE_TEXT, newTextBody: text })

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export default dialogsReducer;