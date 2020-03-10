// nvigation bar
import React from 'react';
import NavIcons from './navIcons.jsx';
import NavOptions from './optionIcons.jsx';
import styles from '../index.scss';
import logo from '../../images/Capoo_hold_its_feet.png';

export default function NavigationBar(props) {
  const {
    iconArray, clickIcon,
    optionArray, clickOption,
    areaChange, clickBlank,
  } = props;

  function createOptions(optionStyle, index) {
    return (
      <NavOptions
        key={`${index}O`}
        optionClass={optionStyle}
        clickOption={() => clickOption(index)}
        optionIndex={index}
      />
    );
  }

  function groupOptions() {
    return (
      optionArray.map((optionStyle, index) => createOptions(optionStyle, index))
    );
  }

  function createIcons(iconStyle, index) {
    return (
      <NavIcons
        key={`${index}I`}
        iconClass={iconStyle}
        clickIcon={() => clickIcon(index)}
        iconImage={index}
      />
    );
  }

  function groupIcons() {
    return (
      iconArray.map((iconStyle, index) => createIcons(iconStyle, index))
    );
  }

  return (
    <div className={styles.navBackground}>
      <div className={styles.navBar}>
        <div className={styles.logoContainer}>
          <img
            src={logo}
            alt="logo"
            className={styles.logo}
          />
        </div>
        <div
          className={styles.navOption}
          onClick={() => areaChange(0)}
          onKeyPress={areaChange}
          role="button"
          tabIndex={0}
        >
          {groupOptions()}
        </div>
        <div
          className={styles.middleBlank}
          onClick={clickBlank}
          onKeyPress={clickBlank}
          role="button"
          tabIndex={0}
          aria-label="clickBlank"
        />
        <div
          className={styles.navIcon}
          onClick={() => areaChange(1)}
          onKeyPress={areaChange}
          role="button"
          tabIndex={0}
        >
          {groupIcons()}
        </div>
      </div>
    </div>
  );
}
