import React, { useState } from 'react';
import InformationBlock from './informationBlock.jsx';
import * as iconsNimages from './imageResources.jsx';
import styles from '../index.scss';

export default function Mainbody(props) {
  const {
    clickBlank,
    logo,
  } = props;


  const contentArray = [
    (
      <p>
        lllaaaasd
        {'\n'}
        ooq
        {'\n'}
        sjfldsi
        {'\n'}
        sdlfjie
        {'\n'}
        jsdilafj
      </p>
    ),
    'qqq',
    'ppp',
    'rrr',
    'sss',
    'ttt',
    'uuu',
    'vvv',
    (
      <p>
        lllaaaasd
        {'\n'}
        ooq
      </p>
    ),
  ];

  const [buttonStyle, setButtonStyle] = useState(styles.postButton);

  function threapeuticDown() {
    setButtonStyle(styles.postButtonClicked);
  }

  function threapeuticUp() {
    setTimeout(() => {
      setButtonStyle(styles.postButton);
    }, 300);
  }

  function deliverInformToBlocks(content, index) {
    return (
      <InformationBlock
        key={`informBlock_${index}`}
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
    <content
      className={styles.contentBody}
      onClick={clickBlank}
      onKeyPress={clickBlank}
      role="button"
      tabIndex="0"
      aria-label="mainBody"
    >
      <div className={styles.contentHeaderBlock}>
        <img
          id="capooDrag"
          src={logo}
          alt="logo"
          className={styles.logo}
        />
        <div className={styles.contentHeader}>
          首頁
        </div>
      </div>
      <div className={styles.messageBlock}>
        <div className={styles.userIconBlock}>
          <div className={styles.userIcon}>
            <img
              src={logo}
              alt="userIcon"
            />
          </div>
        </div>
        <div className={styles.inputArea}>
          <input
            className={styles.postContent}
            placeholder="Share with Capoo"
          />
          <div className={styles.postIcons}>
            <div className={styles.postIconBlock}>
              <div className={styles.fIconContainer}>
                <iconsNimages.FontAwesomeIcon icon={iconsNimages.faCameraRetro} />
              </div>
              <div className={styles.fIconContainer}>
                <iconsNimages.FontAwesomeIcon icon={iconsNimages.faFilm} />
              </div>
              <div className={styles.fIconContainer}>
                <iconsNimages.FontAwesomeIcon icon={iconsNimages.faHeadphonesAlt} />
              </div>
              <div className={styles.fIconContainer}>
                <iconsNimages.FontAwesomeIcon icon={iconsNimages.faChartLine} />
              </div>
            </div>
            <div className={buttonStyle}>
              <button
                onMouseDown={threapeuticDown}
                onMouseUp={threapeuticUp}
              >
                caPOo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.compartment} />
      <div className={styles.informSection}>
        {clusterOfInformBlocks()}
      </div>
    </content>
  );
}
