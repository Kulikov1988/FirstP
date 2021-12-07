const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UDPATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      likesCount: 0,
      message: state.newPostText
    };
    state.posts.push(newPost);
    state.newPostText = '';
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  } 
  return state;
}

export const addPostCreator = () => ({ type: ADD_POST })
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, })

export default profileReducer;