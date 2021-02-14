import React from 'react';
import 'eye.scss';

function Eye() {
  return (
    <div className="drawing">
      <div className="brow"></div>
      <div className="eye">
        <span className="sclera">
          <span className="iris">
            <span className="pupil"></span>
          </span>
        </span>
        <span className="tear-duct"></span>
      </div>
    </div>
  );
}

export default Eye;