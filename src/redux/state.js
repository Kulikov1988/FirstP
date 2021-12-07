import React from 'react';
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import dialogsReducer from './dialogs_reducer';
import friendsReducer from './friends_page_reducer';
import profileReducer from './profile_page_reducer';

let store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      posts: [
        {
          id: 1,
          likesCount: 25,
          message: (
            <LoremIpsum avgWordsPerSentence={4} avgSentencesPerParagraph={2} />
          ),
        },
        {
          id: 2,
          likesCount: 10,
          message: (
            <LoremIpsum avgWordsPerSentence={3} avgSentencesPerParagraph={4} />
          ),
        },
        {
          id: 3,
          likesCount: 45,
          message: (
            <LoremIpsum avgWordsPerSentence={3} avgSentencesPerParagraph={4} />
          ),
        },
        {
          id: 4,
          likesCount: 8,
          message: (
            <LoremIpsum avgWordsPerSentence={3} avgSentencesPerParagraph={4} />
          ),
        },
      ],
      newPostText: 'Privet Tolianchik'
    },
    friendsPage: {

      friendsData: [
        {
          id: 1,
          name: "Dima",
          img: <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cxqxnM-PyVCEhd3gELTF4IQJYf-kmk9qhA&usqp=CAU"
            alt=""
          />
        },
        {
          id: 2,
          name: "Sasha",
          img: <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFrjdjrgOA0ozkgA6y7FwCw830fuJoccPjQ&usqp=CAU"
            alt=""
          />
        },
        {
          id: 3,
          name: "Petya",
          img: <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpFo-yE9V9f6idya5UCXlwvuTf229Z2Sing&usqp=CAU"
            alt=""
          />
        }
      ],
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.state = store;