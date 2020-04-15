import React from 'react';
import Preloader from "../../common/Preloader/Preloader";
import css from './ProfileInfo.module.css';
import profileLogo from "../../../assets/img/user.webp";

class ProfileInfoClass extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    onEditMode = () => {
        this.setState({editMode: true});                // to input view
    };

    offEditMode = () => {
        this.setState({editMode: false});               // to string view
        this.props.updateStatus(this.state.status);           // update global state
    };

    onStatusChange = (e) => {                                 // update local state
        this.setState({status: e.currentTarget.value})
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status})
        }
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        }
        return (
            <>
                <div className={css.bg}>
                    <img className={css.bgImage} alt=''
                         src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                </div>
                <div className={css.bgInfo}>
                    <img src={this.props.profile.photos.large ? this.props.profile.photos.large : profileLogo} alt=''
                         className={css.profilePhoto}/>
                    <div>{this.props.profile.fullName}</div>
                    <div>{this.props.profile.aboutMe}</div>
                    <div>{
                        !this.state.editMode
                            ? <div><span onClick={this.onEditMode}>{this.props.status || "no status" }</span></div>
                            : <div><input onBlur={this.offEditMode}
                                          autoFocus={true}
                                          value={this.state.status}
                                          onChange={this.onStatusChange} /></div>
                    }</div>
                </div>
            </>
        )
    }
}
