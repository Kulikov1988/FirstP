import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let messageElements = props.state.messageData.map((m) => (
    <Message message={m.message} />
  ));

  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <textarea
            value={newMessageBody}
            placeholder="Enter your message here"
            className={s.textAnswer}
            onChange={onNewMessageChange}
          >
            {/* {" "} */}
          </textarea>{" "}
        </div>
        <button onClick={onSendMessageClick}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
