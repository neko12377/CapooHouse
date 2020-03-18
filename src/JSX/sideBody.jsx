import React from 'react';
import styles from '../index.scss';

export default function SideBody() {
  return (
    <div className={styles.sideBody}>
      <div className={styles.whatsNew} />
      <p className={styles.copyRight}>
        © Copyright Kasper Chen 2020.
        {'\n'}
        © Copyright of Images belongs to Yara(亞拉)
      </p>
    </div>
  );
}
