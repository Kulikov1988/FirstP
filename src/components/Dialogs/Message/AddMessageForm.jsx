import React from "react";
import { Field, reduxForm } from 'redux-form'
import { TextArea } from './../../common/Preloader/FormsControls/formsControls';
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
         <Field component={TextArea}    
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message here" />
      </div>
      <div>
         <button>Send Message</button>
      </div>
    </form>
  )
 }

 export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
