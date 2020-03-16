// nvigation bar
import React from 'react';
import NavIcons from './navIcons.jsx';
import NavOptions from './optionIcons.jsx';
import styles from '../index.scss';

export default function NavigationBar(props) {
  const {
    iconArray, clickIcon,
    optionArray, touchOption,
    areaChange,
    capooImages,
    animateCapoo, notAnimateCapoo,
    optionOptionsArray,
  } = props;

  function createOptions(optionStyle, index) {
    return (
      <NavOptions
        key={`${index}O`}
        optionClass={optionStyle}
        touchOption={() => touchOption(index)}
        optionIndex={index}
        capooImages={capooImages}
        animateCapoo={(event) => animateCapoo(index, event)}
        notAnimateCapoo={notAnimateCapoo}
        optionOptionsArray={optionOptionsArray}
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
        {/* <div className={styles.logoContainer}> */}
        {/* <img
          id="capooDrag"
          src={logo}
          alt="logo"
          className={styles.logo}
        /> */}
        {/* </div> */}
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
