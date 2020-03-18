import React from 'react';
import InformationBlock from './informationBlock.jsx';
import styles from '../index.scss';

export default function Mainbody(props) {
  const {
    clickBlank,
    logo,
  } = props;

  const contentArray = [
    'ooo', 'qqq', 'ppp', 'rrr', 'sss', 'ttt', 'uuu', 'vvv',
  ];

  function deliverInformToBlocks(content, index) {
    return (
      <InformationBlock
        key={`informBlock${index}`}
        content={content}
        contentArrayIndex={index}
      />
    );
  }

  function clusterOfInformBlocks() {
    return (
      contentArray.map(
        (content, index) => deliverInformToBlocks(content, index),
      )
    );
  }

  return (
    <div
      className={styles.mainBody}
      onClick={clickBlank}
      onKeyPress={clickBlank}
      role="button"
      tabIndex="0"
      aria-label="mainBody"
    >
      <div className={styles.header}>
        <img
          id="capooDrag"
          src={logo}
          alt="logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.messageBlock} />
      <div className={styles.informSection}>
        {clusterOfInformBlocks()}
      </div>
    </div>
  );
}
