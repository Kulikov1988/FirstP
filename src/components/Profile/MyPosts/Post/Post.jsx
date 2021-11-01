import React from 'react';
import s from './Post.module.css';
import Img from '../Img';

const Post = (props) => {

  return (
    <div className={s.item}>
        <Img />
        { props.message }
          <div>
        <span>like</span>  { props.likesCount }
      </div>
    </div>
  )
}

export default Post;