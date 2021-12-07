const UPDATE_NEW_MESSAGE_BODY = 'UDPATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
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
export const sendMessageCreator = () => ({type: SEND_MESSAGE}) 

export default dialogsReducer;