import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import NavigationBar from './JSX/navigation.jsx';
import Mainbody from './JSX/mainBody.jsx';
import SideBody from './JSX/sideBody.jsx';
import styles from './index.scss';

function Capoo() {
  // Object handle item numbers
  const [itemNumber] = useState({
    optionNumber: 5,
    iconNumber: 3,
  });

  const [optionArray, setOptionArray] = useState(
    Array(itemNumber.optionNumber).fill(styles.navOptions),
  );

  const [iconArray, setIconArray] = useState(
    Array(itemNumber.iconNumber).fill(styles.navListNotShown),
  );

  function clickBlank() {
    setOptionArray(Array(itemNumber.optionNumber).fill(styles.navOptions));
    setIconArray(Array(itemNumber.iconNumber).fill(styles.navListNotShown));
  }

  function areaChange(AreaNumber) {
    let iconArrayCopy = iconArray.slice();
    let optionArrayCopy = optionArray.slice();
    switch (AreaNumber) {
      case 1:
        optionArrayCopy = optionArrayCopy.fill(styles.navOptions);
        setOptionArray(
          optionArrayCopy,
        );
        break;
      case 0:
        iconArrayCopy = iconArrayCopy.fill(styles.navListNotShown);
        setIconArray(
          iconArrayCopy,
        );
        break;
      default:
        break;
    }
  }

  function clickIcon(indexOfIcon) {
    const iconArrayCopy = iconArray.slice();
    switch (iconArrayCopy[indexOfIcon]) {
      case styles.navListNotShown:
        iconArrayCopy.fill(styles.navListNotShown);
        iconArrayCopy[indexOfIcon] = styles.navListShown;
        break;
      case styles.navListShown:
        iconArrayCopy[indexOfIcon] = styles.navListNotShown;
        break;
      default:
        break;
    }
    setIconArray(iconArrayCopy);
  }

  function clickOption(indexOfOption) {
    const optionArrayCopy = optionArray.slice();
    switch (optionArrayCopy[indexOfOption]) {
      case styles.navOptions:
        optionArrayCopy.fill(styles.navOptions);
        optionArrayCopy[indexOfOption] = styles.navOptionsTriggered;
        break;
      case styles.navOptionsTriggered:
        optionArrayCopy[indexOfOption] = styles.navOptions;
        break;
      default:
        break;
    }
    setOptionArray(optionArrayCopy);
  }

  return (
    <div className={styles.mainConcept}>
      <NavigationBar
        areaChange={areaChange}
        iconArray={iconArray}
        clickIcon={clickIcon}
        clickBlank={clickBlank}
        optionArray={optionArray}
        clickOption={clickOption}
      />
      <Mainbody
        clickBlank={clickBlank}
      />
      <SideBody />
    </div>
  );
}

ReactDom.render(
  <Capoo />,
  document.getElementById('root'),
);
