import React from "react";
import { Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../../utils/validators/validators"
import { TextArea } from "../../../common/Preloader/FormsControls/formsControls";

const maxLength20 = maxLengthCreator(20);

const AddPostForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={TextArea} name="newPostText" validate={[required, maxLength20]} />
      </div>
      <div>
        <button>Add post</button>
      </div> 
  </form>
  )
}

export default reduxForm({form: "profile-add-post"})(AddPostForm)

