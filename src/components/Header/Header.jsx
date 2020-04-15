import React from 'react';
import cs from './Header.module.css';
import {NavLink} from 'react-router-dom';

function Header(props) {

    const logout = async () => {
        await props.logout();
        props.history.push('/login');  // redirect
    };

    return (
        <header className={cs.header}>
            <img className={cs.app_logo} alt=''
                 src='https://images.squarespace-cdn.com/content/v1/562e90d3e4b08d310a8d3c46/1508779239721-RJOOQOG310UN9FFO50QG/ke17ZwdGBToddI8pDm48kCBuUI2tq6aZWO_qFgOsypwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcxRUoZT7VIcHYOlbBIop_stCfZBHsR1HMeuC3L5eVs2KhUeCV9NPPVOlIJ4Mhz0lJ/MeetAlex_Black.png'/>

            <div className={cs.login}>
                {props.isAuth
                    ? <div>{props.login}
                        <button onClick={logout}> Log Out</button>
                    </div>
                    : <NavLink to={'/login'}> Login </NavLink>}
            </div>
        </header>
    )
}

export default Header;