import React from 'react';
import * as iconsNimages from './imageResources.jsx';
import styles from '../index.scss';

export default function SettingSection(props) {
  const {
    optionClass,
    usesIndex,
    usesHover,
    leaveUses,
    clickOption,
    useOptionsArray,
    showPss,
  } = props;

  const useDescription = [
    '設定',
  ];

  const useLists = [
    ['個人設定', '頁面設定'], // 0
  ];

  const alternative = [
    'Setting',
  ];

  function creatListItems(item, index) {
    return (
      <div
        key={`${item}_${index}_useOption`}
        onClick={showPss}
      >
        {item}
      </div>
    );
  }

  function useOptions(listIndex) {
    return (
      useLists[listIndex].map(
        (item, index) => creatListItems(item, index),
      )
    );
  }
  // nav-bar options

  return (
    <div
      className={optionClass}
      onMouseOver={usesHover}
      onMouseOut={leaveUses}
      onFocus={usesHover}
      onBlur={leaveUses}
    >
      <div
        className={styles.navOptionsCog}
        onClick={clickOption}
        onKeyPress={clickOption}
        role="button"
        aria-label="navOption"
        tabIndex={0}
      >
        <div className={styles.capooContainer}>
          <iconsNimages.FontAwesomeIcon
            icon={iconsNimages.faCogs}
            alt={alternative[usesIndex]}
          />
        </div>
        <div className={styles.optionDescriptionCog}>
          {useDescription[usesIndex]}
        </div>
      </div>
      <ul className={useOptionsArray[usesIndex]}>
        {useOptions(usesIndex)}
      </ul>
    </div>
  );
}
