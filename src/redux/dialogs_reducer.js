import React from "react";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";

const UPDATE_NEW_MESSAGE_BODY = 'UDPATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: "Dimych", img: (<Avatar gender="male" />) },
    { id: 2, name: "Tolik", img: (<Avatar gender="male" />) },
    { id: 3, name: "Firs", img: (<Avatar gender="male" />) },
    { id: 4, name: "Kostia", img: (<Avatar gender="male" />) },
    { id: 5, name: "Yulia", img: (<Avatar gender="female" />) },
    { id: 6, name: "Vlad", img: (<Avatar gender="male" />) },
    { id: 7, name: "Lina", img: (<Avatar gender="female" />) },
  ],
  messageData: [
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
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessage;
      return state;
    case SEND_MESSAGE:
      let newMessage = state.newMessageBody;
      state.newMessageBody = '';
      state.messageData.push({ id: 7, message: newMessage });
      return state;
    default:
      return state;
  }
}

export const updateNewMessageBodyCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: text })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer;