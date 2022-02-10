import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let messageElements = state.messageData.map((m) => (
    <Message message={m.message} />
  ));

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  };

  if (!props.isAuth) return <Redirect to={'/Login'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div>
          <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
    </div>
  );
};

const AddMessageForm = (props) => {
 return (
   <form onSubmit={props.handleSubmit}>
     <div>
        <Field component="input" name="newMessageBody" placeholder="Enter your message here" />
     </div>
        <button>Send Message</button>
   </form>
 )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessage"})(AddMessageForm)


export default Dialogs;
