import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let messageElements = props.state.messageData.map((m) => <Message message={m.message} />);

  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
         {dialogsElements}
      </div>
      <div className={s.messages}>  
          {messageElements} 
        <div><textarea className={s.textAnswer} ref={newPostElement}> </textarea> </div>
        <button onClick={addPost}>Add your post</button>
      </div>
    </div>
  );
};

export default Dialogs;
