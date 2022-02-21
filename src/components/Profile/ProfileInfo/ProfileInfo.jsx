import React, { Profiler } from "react";
import s from "./Profileinfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Profiler />
  }

  let contacts = [];
  for (const property in props.profile.contacts) 
    {  if (props.profile.contacts[property] != null)
    contacts.push([property, props.profile.contacts[property]])
          }

  return (
    <div>
      <div className={s.ProfileInfo} />
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.aboutMe}</div>
        <div>{contacts.map(contact => {
            return <div>
              {` ${contact[0]} : ${contact[1]}`}
            </div>
        })}</div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>
  );
};

export default ProfileInfo;
