import React from 'react';
import * as iconsNimages from './imageResources.jsx';
import styles from '../index.scss';

export default function PersonalSetting(props) {
  const {
    userName,
    personalSettingSection,
    personalSettingSectionMask,
    hidePss,
  } = props;

  const pscOptionsArray = [
    '主題',
    '新聞',
    'Capoo廣告',
    '分析',
  ];

  const pscTitleIconArray = [
    iconsNimages.faIcons,
    iconsNimages.faBolt,
    iconsNimages.faExternalLinkAlt,
    iconsNimages.faBrain,
  ];

  const pscOptionsCol3Array = [
    '設定和隱私',
    '說明中心',
    '顯示',
  ];

  const pscTitleIconCol3Array = [
    iconsNimages.faUserCog,
    iconsNimages.faQuestion,
    iconsNimages.faQuidditch,
  ];

  function pscOption(option, index) {
    return (
      <div
        className={styles.pscOption}
        key={`pscOption_${index}`}
      >
        <div className={styles.pscTitleIcon}>
          <iconsNimages.FontAwesomeIcon
            icon={pscTitleIconArray[index]}
          />
        </div>
        {option}
      </div>
    );
  }

  function pscOptions() {
    return (
      pscOptionsArray.map(
        (option, index) => pscOption(option, index),
      )
    );
  }
  function pscOptionCol3(option, index) {
    return (
      <div
        className={styles.pscOptionCol3}
        key={`pscOptionCol3_${index}`}
      >
        <div className={styles.pscTitleIcon}>
          <iconsNimages.FontAwesomeIcon
            icon={pscTitleIconCol3Array[index]}
          />
        </div>
        {option}
      </div>
    );
  }

  function pscOptionsCol3() {
    return (
      pscOptionsCol3Array.map(
        (option, index) => pscOptionCol3(option, index),
      )
    );
  }

  return (
    <section>
      <div
        className={personalSettingSectionMask}
        onClick={hidePss}
      />
      <div className={personalSettingSection}>
        <div className={styles.psContentCol1}>
          <div className={styles.pscUserIcon}>
            <img src={iconsNimages.universeNo1Cuteness} alt="userIcon" />
          </div>
          <div className={styles.userName}>
            {userName}
          </div>
        </div>
        <div className={styles.psContentCol2}>
          {pscOptions()}
        </div>
        <div className={styles.psContentCol3}>
          {pscOptionsCol3()}
        </div>
        <div className={styles.psContentCol4}>
          登出
        </div>
      </div>
    </section>
  );
}
