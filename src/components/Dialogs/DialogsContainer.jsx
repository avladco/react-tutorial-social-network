import React from 'react';
import {messageChangeActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = (props) => {
    let state = props.store.getState();
    let onClickSendMessage = () =>  {props.store.dispatch(sendMessageActionCreator())};
    let onChangeTextarea = (bodyText) => {
        props.store.dispatch(messageChangeActionCreator(bodyText))
    };
  return (
      <Dialogs onClickSendMessage={onClickSendMessage}
               onChangeTextarea={onChangeTextarea}
               newBodyText={state.dialogsPage.newMessageText}
               dialogs={state.dialogsPage.dialogsData}
               messages={state.dialogsPage.messagesData}
      />
)};*/

let State_Props = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let Dispatch_Props = (dispatch) => {
    return {
        messageChange: (bodyText) => {
            dispatch(messageChangeActionCreator(bodyText));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
};

const DialogsContainer = connect(State_Props, Dispatch_Props)(Dialogs);

export default DialogsContainer;