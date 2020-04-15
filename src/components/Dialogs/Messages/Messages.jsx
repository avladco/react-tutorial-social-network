import React from 'react';
import s from './../Dialogs.module.css';

const ItemMessage = (props) => {
    return (
        <div className={s.message}> {props.mess} </div>
    )
};

export default ItemMessage;