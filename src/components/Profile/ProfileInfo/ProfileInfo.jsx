import React from "react";
import s from "./Profileinfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.ProfileInfo} />
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
