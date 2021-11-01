import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postData = [
    { id: 1, likesCount: 25, message: "Hi, how are you?" },
    { id: 2, likesCount: 10, message: "It's my first post" },
  ];


  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        
        <div>
          <textarea />
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
