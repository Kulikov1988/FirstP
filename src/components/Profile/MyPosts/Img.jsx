import React from 'react';
import s from './Img.module.css';

const Img = (props) => {

  return (
    <div className={s.item}>
      <img src='https://whatsondisneyplus.com/wp-content/uploads/2021/09/bart-.png' alt='Bar'/>
        { props.img }
    </div>
  )
}

export default Img;