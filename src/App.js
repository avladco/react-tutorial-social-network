import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import {Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {getAuthUserData} from "./Redux/auth-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));
const Login = React.lazy(() => import ("./components/Login/Login"));

class App extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar loggedUserId={this.props.loggedUserId}/>
                <React.Suspense fallback={<Preloader type='bubbles'/>}>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>
                </React.Suspense>
            </div>
        );
    }
}

//const mstp = (state) => ({loggedUserId: state.auth.userId});
export default compose(
    withRouter,
    connect(null, {getAuthUserData}))(App);

