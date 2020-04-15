import React from 'react';
import css from './Preloader.module.scss'

const Preloader = ({type = 'waves'}) => {

    switch (type) {
        case 'waves':
            return <div className={css.wrapper}>
                <div className={css.ldsRipple}>
                    <div/> <div/>
                </div>
            </div>;
        case 'bubbles':
            return <div className={css.ldsEllipsis}>
                <div/> <div/> <div/> <div/>
            </div>;
        default:
            return;
    }
};


export default Preloader;