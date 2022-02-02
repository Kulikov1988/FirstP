import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let messageElements = state.messageData.map((m) => (
    <Message message={m.message} />
  ));

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) return <Redirect to={'/Login'} />;

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
          />{" "}
        </div>
        <button onClick={onSendMessageClick}>Send Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
