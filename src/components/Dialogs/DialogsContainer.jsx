import {sendMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let State_Props = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

export default compose(
    connect(State_Props, {sendMessage}),
    withAuthRedirect
)(Dialogs);