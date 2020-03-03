// nvigation bar
import React, { useState } from 'react';
import { NavIcons } from './navIcons.jsx';
import styles from '../index.scss';

function NavigationBar() {
  const [buttonNumber] = useState(5);
  const [iconArray, setIconArray] = useState(Array(buttonNumber).fill(styles.navIcons));

  function areaChange(AreaNumber) {
    let iconArrayCopy = iconArray.slice();
    switch (AreaNumber) {
      case 1:
        break;
      case 0:
        iconArrayCopy = iconArrayCopy.fill(styles.navIcons);
        setIconArray(iconArrayCopy);
        break;
      default:
        break;
    }
  }

  function Click(indexOfIcon) {
    const iconArrayCopy = iconArray.slice();
    switch (iconArrayCopy[indexOfIcon]) {
      case styles.navIcons:
        iconArrayCopy.fill(styles.navIcons);
        iconArrayCopy[indexOfIcon] = styles.navIconsChange;
        break;
      case styles.navIconsChange:
        iconArrayCopy[indexOfIcon] = styles.navIcons;
        break;
      default:
        break;
    }
    setIconArray(iconArrayCopy);
  }

  function icons(iconStyle, number) {
    return (
      <NavIcons
        key={number}
        iconClass={iconStyle}
        Click={() => Click(number)}
      />
    );
  }

  function iconSet() {
    return (
      iconArray.map((iconStyle, index) => icons(iconStyle, index))
    );
  }
  return (
    <div className={styles.navBar}>
      <div
        className={styles.navOption}
        onClick={() => areaChange(0)}
        onKeyPress={areaChange}
        role="button"
        tabIndex="0"
      >
        {iconSet()}
      </div>
      <div
        className={styles.navIcon}
        onClick={() => areaChange(1)}
        onKeyPress={areaChange}
        role="button"
        tabIndex="0"
      >
        {iconSet()}
      </div>
    </div>
  );
}

export { NavigationBar };
