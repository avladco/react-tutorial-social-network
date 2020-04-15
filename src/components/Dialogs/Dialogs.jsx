import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Contacts/Contacts";
import ItemMessage from "./Messages/Messages";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let allContacts = props.dialogsPage.dialogsData.map(el => (<DialogItem id={el.id} key={el.id} name={el.name}/>));
    let allMessages = props.dialogsPage.messagesData.map(el => <ItemMessage id={el.id} key={el.id} mess={el.message}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.messageBody);
    };

    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                {allContacts}
            </div>

            <div className={s.message}>
                <div>{allMessages}</div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>

        </div>
    )
};

export default Dialogs;