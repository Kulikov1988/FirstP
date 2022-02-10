import React from "react";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";

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
  
};

const dialogsReducer = (state = initialState, action) => {
   
  switch (action.type) {
      case SEND_MESSAGE: 
        let newMessage = action.newMessageBody;
       return {
        ...state,
        messageData: [...state.messageData, { id: 7, message: newMessage }]
      }    
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;