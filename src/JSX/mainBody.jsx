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
        商店可以連結到:
        {'\n'}
        咖波屋
        {'\n'}
        奶泡貓咖啡
        {'\n'}
      </p>
    ),
    (
      <p>
        <img
          src={iconsNimages.universeNo1Cuteness}
          alt="universe_No_1_cuteness"
        />
        <div>
          咖波超可愛
        </div>
      </p>
    ),
    '還在學怎麼串資料庫的API',
    '所以要用到資料庫的功能',
    '都還不能用',
    (
      <img
        src={iconsNimages.laughNSilence}
        alt="universe_No_1_cuteness"
      />
    ),
    (
      <p>
        繼續努力研究
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

  function therapeuticClick() {
    setButtonStyle(styles.postButtonClicked);
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
        <form className={styles.inputArea}>
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
                className={styles.button}
                type="submit"
                onMouseDown={threapeuticDown}
                onMouseUp={threapeuticUp}
                onClick={therapeuticClick}
              >
                caPOo
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.compartment} />
      <div className={styles.informSection}>
        {clusterOfInformBlocks()}
      </div>
    </content>
  );
}
