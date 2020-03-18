import React from 'react';
import styles from '../index.scss';

export default function InformationBlock(props) {
  const {
    content,
    contentArrayIndex,
  } = props;
  return (
    <div className={styles.informationBlock}>
      {content}
    </div>
  );
}
