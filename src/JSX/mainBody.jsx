import React from 'react';
import styles from '../index.scss';

export default function Mainbody(props) {
  const { clickBlank } = props;
  return (
    <div
      className={styles.mainBody}
      onClick={clickBlank}
      onKeyPress={clickBlank}
      role="button"
      tabIndex="0"
      aria-label="mainBody"
    >
      <div className={styles.messageBlock} />
    </div>
  );
}
