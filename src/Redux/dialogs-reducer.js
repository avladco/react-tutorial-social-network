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
        ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return  {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: action.message}]
            };
        }
        default:
            return state;

    }
};

export const sendMessage = (message) => ({type: SEND_MESSAGE, message});

export default dialogsReducer;