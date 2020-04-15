import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Contacts/Contacts";
import ItemMessage from "./Messages/Messages";
import {messageChangeActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {

    let allContacts = props.dialogsPage.dialogsData.map( el => (<DialogItem id={el.id} key={el.id} name={el.name} />));
    let allMessages = props.dialogsPage.messagesData.map( el => <ItemMessage id={el.id} key={el.id} mess={el.message} />);

    let onClickSendMessage = () => {
        props.sendMessage();
    };

    let onChangeTextarea = (e) => {
        let bodyText = e.target.value;
        props.messageChange(bodyText);
    };

  return (
      <div className={s.dialogs}>

          <div className={s.dialogs_items} >
              { allContacts }
          </div>

          <div className={s.message}>
              <div>{allMessages}</div>
              <div>
                  <div>
                      <div><textarea onChange={ onChangeTextarea } placeholder='Enter your text' value={props.newBodyText}></textarea></div>
                      <div><button onClick={ onClickSendMessage }> Send Message </button></div>
                  </div>
              </div>
          </div>

      </div>
  )
};

export default Dialogs;