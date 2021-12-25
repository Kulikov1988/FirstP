import React from "react";
import {
  updateNewPostTextCreator,
  addPostCreator,
} from "../../../redux/profile_page_reducer";
import StoreContext from "../../../StoreContent";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
         store.dispatch(addPostCreator());
        };

        let onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
         store.dispatch(action);
        };
      
       return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
        />
       }
      }
    </StoreContext.Consumer>
  )
};

export default MyPostsContainer;
