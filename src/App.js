import React, {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

    const App = (props) => {

        return (
            <div className="App">

                <Header/>

                <Navbar/>

                <Route path="/profile"
                       render={() => <Profile/>}/>

                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>

                <Route path="/users"
                       render={() => <UsersContainer/>}/>


            </div>
        );
    }


export default App;
