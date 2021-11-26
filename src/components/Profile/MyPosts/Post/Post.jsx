import React from "react";
import s from "./Post.module.css";
import Img from "../Img";

const Post = (props) => {
  return (
    <div className={s.item}>
      <Img />
      <div>{props.message}</div>
      <div>like {props.likesCount}</div> 
    </div>
  );
};

export default Post;
