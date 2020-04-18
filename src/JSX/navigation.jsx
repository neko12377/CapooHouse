// nvigation bar
import React, { useState } from 'react';
import NavOptions from './optionIcons.jsx';
import SettingSection from './settingSection.jsx';
import PersonalSetting from './personalSetting.jsx';
import styles from '../index.scss';

export default function NavigationBar(props) {
  const {
    // for animate options
    optionArray,
    capooImages,
    animateCapoo,
    notAnimateCapoo,
    optionOptionsArray,
    // for touch device
    clickOption,
    // for FontAwesome uses
    useArray,
    useOptionsArray,
    usesHover,
    leaveUses,
    userName,
  } = props;

  const [personalSettingSection, showPersonalSettingSection] = useState(styles.notShow);
  const [personalSettingSectionMask, showPersonalSettingSectionMask] = useState(styles.notShow);

  function showPss() {
    showPersonalSettingSection(styles.psContainer);
    showPersonalSettingSectionMask(styles.psContainerControler);
  }

  function hidePss() {
    showPersonalSettingSection(styles.notShow);
    showPersonalSettingSectionMask(styles.notShow);
  }

  function createOptions(optionStyle, index) {
    return (
      <NavOptions
        // React ask me to have one
        key={`options_${index}`}
        optionClass={optionStyle}
        // Distinguish every option items by sequence
        optionIndex={index}
        capooImages={capooImages}
        animateCapoo={() => animateCapoo(index)}
        notAnimateCapoo={notAnimateCapoo}
        optionOptionsArray={optionOptionsArray}
        // optimizing for touchable devices
        clickOption={() => clickOption(index)}
      />
    );
  }
  // Create a list of option components
  function groupOptions() {
    return (
      optionArray.map((optionStyle, index) => createOptions(optionStyle, index))
    );
  }

  function createUses(optionStyle, index) {
    return (
      <SettingSection
        // React ask me to have one
        key={`uses_${index}`}
        // Distinguish every uses via sequence
        usesIndex={index}
        usesHover={() => usesHover(index)}
        leaveUses={leaveUses}
        useOptionsArray={useOptionsArray}
        // optimizing for touchable devices
        optionClass={optionStyle}
        showPss={showPss}
      />
    );
  }

  function groupUses() {
    return (
      useArray.map((optionStyle, index) => createUses(optionStyle, index))
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerfixed}>
        <div className={styles.navBar}>
          <div
            className={styles.navOption}
          >
            {groupOptions()}
          </div>
        </div>
        <div className={styles.navBar}>
          <div
            className={styles.navOptionCog}
          >
            {groupUses()}
          </div>
        </div>
      </div>
      <PersonalSetting
        userName={userName}
        personalSettingSection={personalSettingSection}
        personalSettingSectionMask={personalSettingSectionMask}
        hidePss={hidePss}
      />
    </header>
  );
}
