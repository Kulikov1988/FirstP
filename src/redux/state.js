import React from 'react';
import { LoremIpsum } from "react-lorem-ipsum";

let state = {
  profilePage: {
    dialogsData: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Tolik" },
      { id: 3, name: "Firs" },
      { id: 4, name: "Kostia" },
      { id: 5, name: "Biasha" },
      { id: 6, name: "Vlad" },
      { id: 7, name: "Lina" },
    ],
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
    ]
  },
    messagesPage: {
      
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
    }
};

export default state;