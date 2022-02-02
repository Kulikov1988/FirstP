import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {withAuthRedict} from "../../hoc/withAuthRedict";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
};

export default compose(
  withAuthRedict,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs); 
