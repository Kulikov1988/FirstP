import React from 'react';
import { LoremIpsum } from "react-lorem-ipsum";
import { profileAPI, usersAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
  // newPostText: 'Privet Tolianchik',
  profile: null ,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        likesCount: 0,
        message: action.newPostText
      };
      return { 
        ...state,
        posts: [...state.posts, (newPost)],
       };
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS : {
      return {...state, status: action.status}
    }
    default:
      return state;
  }
}

export const addPostCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status}) 

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
} 

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  })
} 

export default profileReducer;