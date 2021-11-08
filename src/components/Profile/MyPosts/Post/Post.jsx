import React from "react";
import s from "./Post.module.css";
import Img from "../Img";

const Post = (props) => {
  return (
    <div className={s.item}>
      <Img />
      {props.message}
      <span>like</span> {props.likesCount}
    </div>
  );
};

export default Post;
