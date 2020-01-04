import React from 'react';

const Buttons = props => {
  return (
    <div className="ui container center aligned">
      <button className={`ui circular github icon button ${props}`}>
        <i className="github icon"></i>
      </button>
      <button className="ui circular twitter icon button">
        <i className="twitter icon"></i>
      </button>
      <button className="ui circular linkedin icon button">
        <i className="linkedin icon"></i>
      </button>
    </div>
  );
};

export default Buttons;
