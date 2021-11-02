import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { LoremIpsum } from "react-lorem-ipsum";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Tolik" },
    { id: 3, name: "Firs" },
    { id: 4, name: "Kostia" },
    { id: 5, name: "Biasha" },
    { id: 6, name: "Vlad" },
  ];

  let dialogsElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />,
    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />,
    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />,
    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />,
  ]

  let messageData = [
    {
      id: 1,
      message: (
        <LoremIpsum avgWordsPerSentence={1} avgSentencesPerParagraph={3} />
      ),
    },
    {
      id: 2,
      message: (
        <LoremIpsum avgWordsPerSentence={3} avgSentencesPerParagraph={2} />
      ),
    },
    {
      id: 3,
      message: (
        <LoremIpsum avgWordsPerSentence={3} avgSentencesPerParagraph={5} />
      ),
    },
    {
      id: 4,
      message: (
        <LoremIpsum avgWordsPerSentence={3} avgSentencesPerParagraph={3} />
      ),
    },
    {
      id: 5,
      message: (
        <LoremIpsum avgWordsPerSentence={2} avgSentencesPerParagraph={6} />
      ),
    },
    {
      id: 6,
      message: (
        <LoremIpsum avgWordsPerSentence={5} avgSentencesPerParagraph={3} />
      ),
    },
  ];

  let messageElements = [
    <Message message={messageData[0].message} />,
    <Message message={messageData[1].message} />,
    <Message message={messageData[2].message} />,
    <Message message={messageData[3].message} />,
    <Message message={messageData[4].message} />,
    <Message message={messageData[5].message} />,
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
      {dialogsElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>
  );
};

export default Dialogs;
