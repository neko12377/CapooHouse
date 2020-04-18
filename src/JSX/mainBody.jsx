import React, { useState } from 'react';
import InformationBlock from './informationBlock.jsx';
import * as iconsNimages from './imageResources.jsx';
import styles from '../index.scss';

export default function Mainbody(props) {
  const {
    logo,
  } = props;


  const [contentArray, setContentArray] = useState([
    (
      <p>
        咖波
      </p>
    ),
    '咖波',
    '咖波',
    '咖波',
    (
      <img
        src={iconsNimages.laughNSilence}
        alt="universe_No_1_cuteness"
      />
    ),
    (
      <div className={styles.informContent}>
        <img
          src={iconsNimages.universeNo1Cuteness}
          alt="universe_No_1_cuteness"
        />
        <p>
          咖波超可愛
        </p>
      </div>
    ),
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
  ]);

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
    const contentArrayCopy = contentArray.slice();
    contentArrayCopy.push('Nothing inside, yet');
    setContentArray(contentArrayCopy);
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
      // onClick={clickBlank}
      // onKeyPress={clickBlank}
      // role="button"
      // tabIndex="0"
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
        <form
          className={styles.inputArea}
          action="#"
          name="posts"
          method="get"
        >
          <textarea
            className={styles.postContent}
            placeholder="Share with Capoo"
            name="posts"
            type="text"
            form="posts"
            maxLength="500"
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
