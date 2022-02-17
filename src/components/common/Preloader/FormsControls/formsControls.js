import React from "react";
import styles from './formControls.module.css';

const FormControl = ({meta,input,child,element,...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + ( hasError ? styles.error : " ")}>
      <div>
          {props.children} 
      </div>
     { hasError && <span>{meta.error}</span> } 
    </div>
  )
}

export const TextArea = (props) => {
  const {meta,input,child,element,...restProps} = props;
  return  <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl> 
}

export const Input = (props) => {
  const {meta,input,child,element,...restProps} = props;
  return  <FormControl {...props}> <input {...input} {...restProps} /></FormControl> 
}

