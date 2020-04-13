import React from 'react';
import styles from '../index.scss';
import * as iconsNimages from './imageResources.jsx';

export default function InformationBlock(props) {
  const {
    content,
  } = props;

  const responseIcons = [
    iconsNimages.faComment,
    iconsNimages.faRetweet,
    iconsNimages.faShare,
    iconsNimages.faHeart,
  ];

  const responseNumber = [
    50,
    204,
    74,
    700,
  ];
  return (
    <div className={styles.informationBlock}>
      <div className={styles.informUserIconBlock}>
        <div className={styles.informUserIcon}>
          <img
            alt="userIcon"
            src={iconsNimages.capooShocked}
          />
        </div>
      </div>
      <div className={styles.informContentBlock}>
        <div className={styles.informUserName}>
          capoo
        </div>
        <div className={styles.informContent}>
          {content}
        </div>
        <div className={styles.informResponsesBlock}>
          <div className={styles.informResponse}>
            <div className={styles.informResponseHover}>
              <iconsNimages.FontAwesomeIcon icon={responseIcons[0]} />
            </div>
            <div className={styles.informResponseNumber}>
              {responseNumber[0]}
            </div>
          </div>
          <div className={styles.informResponse}>
            <div className={styles.informResponseHover}>
              <iconsNimages.FontAwesomeIcon icon={responseIcons[1]} />
            </div>
            <div className={styles.informResponseNumber}>
              {responseNumber[1]}
            </div>
          </div>
          <div className={styles.informResponse}>
            <div className={styles.informResponseHover}>
              <iconsNimages.FontAwesomeIcon icon={responseIcons[2]} />
            </div>
            <div className={styles.informResponseNumber}>
              {responseNumber[2]}
            </div>
          </div>
          <div className={styles.informResponse}>
            <div className={styles.informResponseHover}>
              <iconsNimages.FontAwesomeIcon icon={responseIcons[3]} />
            </div>
            <div className={styles.informResponseNumber}>
              {responseNumber[3]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
