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
      <p className={styles.copyRight}>
        {`© Copyright Kasper Chen 2020.
          © Copyright of Images belongs to Yara(亞拉)`}
      </p>
    </div>
  );
}
