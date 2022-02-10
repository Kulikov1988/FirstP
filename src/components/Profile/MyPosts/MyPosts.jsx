import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let addPost = (values) => {
    props.addPost(values.newPostText);
  };

    return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
      <AddPostFormRedux onSubmit={addPost}/>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const addPostForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
      <div>
      <Field component="textarea" name="newPostText" />
      </div>
    <button>Add post</button>
  </form>
  )
}

const AddPostFormRedux = reduxForm({form: "profileAddPost"})(addPostForm)


export default MyPosts;
