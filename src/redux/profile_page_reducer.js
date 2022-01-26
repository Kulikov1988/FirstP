import React from 'react';
import { LoremIpsum } from "react-lorem-ipsum";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UDPATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
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
  newPostText: 'Privet Tolianchik',
  profile: null 
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        likesCount: 0,
        message: state.newPostText
      };
      return { 
        ...state,
        posts: [...state.posts, (newPost)],
        newPostText: ""
       };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { 
        ...state,
        newPostText: action.newText 
      };
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    default:
      return state;
  }
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;