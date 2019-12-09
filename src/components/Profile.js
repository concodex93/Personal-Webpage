import React from 'react';
import Blurb from './Blurb';
import Buttons from './Buttons';

const Profile = () => {
  return (
    <div className="ui container" style={{ padding: '50px' }}>
      <div className="ui centered card">
        <div className="ui slide masked reveal image">
          <img src="/images/image1.png" className="visible content"></img>
          <img src="/images/image3.png" className="hidden content"></img>
        </div>
        <div className="content">
          <a className="header">Conor Byrne</a>
          <div className="meta">
            <span className="date">
              Software Application Developer @Workday since 2016
            </span>
          </div>
        </div>
      </div>
      <Blurb />
      <Buttons />
    </div>
  );
};

export default Profile;
