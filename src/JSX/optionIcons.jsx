// nav-bar options
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPalette, faEnvelopeOpenText, faAngleDoubleUp, faAt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBell, faEnvelope, faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import styles from '../index.scss';

export default function NavOption(props) {
  const optionImages = [
    faPalette, faBell, faEnvelope, faPaperPlane, faAt,
  ];
  const optionDescription = [
    '首頁', '通知', '訊息', '聊天', '標記',
  ];
  const {
    optionClass,
    clickOption,
    optionIndex,
  } = props;

  return (
    <div className={styles.blockOfOptionNList}>
      <div
        className={optionClass}
        onClick={clickOption}
        onKeyPress={clickOption}
        role="button"
        aria-label="navOption"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={optionImages[optionIndex]} />
        <div className={styles.optionDescriptions}>
          {optionDescription[optionIndex]}
        </div>
      </div>
    </div>
  );
}
