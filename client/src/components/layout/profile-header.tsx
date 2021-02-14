import React from 'react';
import './profile-header.scss';
import Profile from '../profile';

function ProfileHeader() {
  return (
    <div className="mbp-profile-header">
      <div className="mbp-profile-grouping">
        <Profile></Profile>
        <Profile></Profile>
        <span className="mbp-profile-current">
        </span>
        <Profile></Profile>
        <Profile></Profile>
        <span className="mbp-profile-add">+
        </span>
      </div>
    </div>
  );
}

export default ProfileHeader;
