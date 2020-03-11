// nav-bar options
import React, { useState } from 'react';
// Try FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faPalette, faEnvelopeOpenText, faAngleDoubleUp, faAt,
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faBell, faEnvelope, faPaperPlane,
// } from '@fortawesome/free-regular-svg-icons';
// Try FontAwesome

// Images of option
import homePageLogo from '../../images/cute_king/cute_king01.png';
import homePageLogoM from '../../images/cute_king.png';
import informationLogo from '../../images/Capoo_dance frame/Capoo01.png';
import informationLogoM from '../../images/Capoo_dance.png';
import messageLoge from '../../images/capooMailman/capooMailman01.png';
import messageLogeM from '../../images/capooMailman.png';
import conversationLogo from '../../images/capooPhone/capooPhone01.png';
import conversationLogoM from '../../images/capooPhone.png';
import tagLogo from '../../images/rainbowCapoo/rainbowCapoo01.png';
import tagLogoM from '../../images/rainbowCapoo.png';
// Images of option

import styles from '../index.scss';

export default function NavOption(props) {
  const {
    optionClass,
    clickOption,
    optionIndex,
  } = props;

  // Try FontAwesome
  // const optionImages = [
  //   faPalette, faBell, faEnvelope, faPaperPlane, faAt,
  // ];
  // Try FontAwesome

  const capooImages = [
    homePageLogo, informationLogo, messageLoge, conversationLogo, tagLogo,
  ];

  const capooImagesM = [
    homePageLogoM, informationLogoM, messageLogeM, conversationLogoM, tagLogoM,
  ];

  const optionDescription = [
    '首頁', '通知', '訊息', '聊天', '標記',
  ];

  const [capooImagesShift, setCapooImagesShift] = useState(capooImages[optionIndex]);

  function animateCapoo() {
    setCapooImagesShift(capooImagesM[optionIndex]);
  }

  function notAnimateCapoo() {
    setCapooImagesShift(capooImages[optionIndex]);
  }

  return (
    <div
      className={styles.blockOfOptionNList}
      onMouseEnter={animateCapoo}
      onMouseLeave={notAnimateCapoo}
    >
      <div
        className={optionClass}
        onClick={clickOption}
        onKeyPress={clickOption}
        role="button"
        aria-label="navOption"
        tabIndex={0}
      >
        {/* <FontAwesomeIcon icon={optionImages[optionIndex]} /> */}
        <div>
          <img
            className={styles.capooContainer}
            src={capooImagesShift}
            alt="homepage"
          />
        </div>
        <div className={styles.optionDescriptions}>
          {optionDescription[optionIndex]}
        </div>
      </div>
    </div>
  );
}
// nav-bar options
