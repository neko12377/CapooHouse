// nav-bar icons

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function NavIcons(props) {
  const { iconClass } = props;
  const { Click } = props;
  // console.log(props, 'props');
  return (
    <div
      className={iconClass}
      onClick={Click}
      onKeyPress={Click}
      role="button"
      aria-label="navIcon"
      tabIndex={0}
    >
      <FontAwesomeIcon icon={faYoutube} />
    </div>
  );
}

export { NavIcons };
