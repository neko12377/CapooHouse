import React, { useState, useEffect } from 'react';
import NavigationBar from './navigation.jsx';
// Images
import * as logos from './imageResources.jsx';
// Images
import Mainbody from './mainBody.jsx';
import SideBody from './sideBody.jsx';
import styles from '../index.scss';

export default function Capoo() {
  // Object handle item numbers
  const [itemNumber] = useState({
    optionNumber: 5,
    iconNumber: 3,
  });
  // handle the state about whether the navgation bar icon is focused
  const [optionArray, setOptionArray] = useState(
    Array(itemNumber.optionNumber).fill(styles.blockOfOptionNList),
  );

  const capooImagesArray = [
    logos.homePageLogo,
    logos.informationLogo,
    logos.messageLoge,
    logos.conversationLogo,
    logos.tagLogo,
  ];

  const [capooImages, setCapooImages] = useState([
    logos.homePageLogo,
    logos.informationLogo,
    logos.messageLoge,
    logos.conversationLogo,
    logos.tagLogo,
  ]);

  const capooImagesM = [
    logos.homePageLogoM,
    logos.informationLogoM,
    logos.messageLogeM,
    logos.conversationLogoM,
    logos.tagLogoM,
  ];

  const [optionOptionsArray, setOptionOptionsArray] = useState(
    Array(itemNumber.optionNumber).fill(styles.notShow),
  );

  const [iconArray, setIconArray] = useState(
    Array(itemNumber.iconNumber).fill(styles.navListNotShown),
  );

  function clickBlank() {
    setOptionArray(
      Array(itemNumber.optionNumber).fill(styles.blockOfOptionNList),
    );
    setIconArray(
      Array(itemNumber.iconNumber).fill(styles.navListNotShown),
    );
    setCapooImages(
      capooImagesArray,
    );
    setOptionOptionsArray(
      Array(itemNumber.optionNumber).fill(styles.notShow),
    );
  }

  function areaChange(AreaNumber) {
    let iconArrayCopy = iconArray.slice();
    let optionArrayCopy = optionArray.slice();
    switch (AreaNumber) {
      case 1:
        optionArrayCopy = optionArrayCopy.fill(
          styles.blockOfOptionNList,
        );
        setOptionArray(
          optionArrayCopy,
        );
        break;
      case 0:
        iconArrayCopy = iconArrayCopy.fill(
          styles.navListNotShown,
        );
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
        iconArrayCopy.fill(
          styles.navListNotShown,
        );
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
    const optionOptionsArrayCopy = optionOptionsArray.slice();
    let capooImagesCopy = capooImages.slice();
    switch (optionArrayCopy[indexOfOption]) {
      case styles.blockOfOptionNList:
        optionArrayCopy.fill(
          styles.blockOfOptionNList,
        );
        optionOptionsArrayCopy.fill(
          styles.notShow,
        );
        optionArrayCopy[indexOfOption] = styles.blockOfOptionNListTriggered;
        optionOptionsArrayCopy[indexOfOption] = styles.optionOptions;
        capooImagesCopy = capooImagesArray;
        capooImagesCopy[indexOfOption] = capooImagesM[indexOfOption];
        break;
      case styles.blockOfOptionNListTriggered:
        optionArrayCopy[indexOfOption] = styles.blockOfOptionNList;
        optionOptionsArrayCopy[indexOfOption] = styles.notShow;
        capooImagesCopy = capooImagesArray;
        break;
      default:
        break;
    }
    setOptionArray(optionArrayCopy);
    setOptionOptionsArray(optionOptionsArrayCopy);
    setCapooImages(capooImagesCopy);
  }

  function animateCapoo(indexOfImages, event) {
    event.stopPropagation();
    event.preventDefault();
    // The maxTouchPoints read-only property of the Navigator interface
    // returns the maximum number of simultaneous touch contact points
    // are supported by the current device.
    if (!(navigator.maxTouchPoints)) {
      const optionArrayCopy = optionArray.slice();
      const optionOptionsArrayCopy = optionOptionsArray.slice();
      const capooImagesCopy = capooImages.slice();

      optionArrayCopy[indexOfImages] = styles.blockOfOptionNListTriggered;
      capooImagesCopy[indexOfImages] = capooImagesM[indexOfImages];
      optionOptionsArrayCopy[indexOfImages] = styles.optionOptions;

      setOptionArray(optionArrayCopy);
      setOptionOptionsArray(optionOptionsArrayCopy);
      setCapooImages(capooImagesCopy);
    }
  }

  function notAnimateCapoo() {
    if (!(navigator.maxTouchPoints)) {
      setOptionArray(Array(itemNumber.optionNumber).fill(styles.blockOfOptionNList));
      setOptionOptionsArray(Array(itemNumber.optionNumber).fill(styles.notShow));
      setCapooImages(capooImagesArray);
    }
  }

  useEffect(() => {
    const capooDrag = document.getElementById('capooDrag');
    const capooDragCoordinate = capooDrag.getBoundingClientRect();
    const dragableArea = {
      left: 0,
      top: 0,
      right: document.documentElement.clientWidth
        - capooDragCoordinate.width,
      bottom: document.documentElement.scrollHeight
        - capooDragCoordinate.height,
    };

    let startX;
    let startY;

    let capooX;
    let capooY;

    function preventD(event) {
      event.preventDefault();
      event.stopPropagation();
    }

    function move(event) {
      if (!navigator.maxTouchPoints) {
        let x = event.clientX - startX;
        let y = event.clientY - startY;
        x = Math.max(Math.min(x, dragableArea.right), dragableArea.left);
        y = Math.max(Math.min(y, dragableArea.bottom), dragableArea.top);
        capooDrag.style.left = `${x}px`;
        capooDrag.style.top = `${y}px`;
      } else {
        event.preventDefault();
        // document.body.addEventListener('touchmove', preventD, { passive: false });
        capooX = event.touches['0'].clientX - startX;
        capooY = event.touches['0'].clientY - startY;
        capooX = Math.max(Math.min(capooX, dragableArea.right), dragableArea.left);
        capooY = Math.max(Math.min(capooY, dragableArea.bottom), dragableArea.top);
      }
    }

    function stop() {
      if (!(navigator.maxTouchPoints)) {
        document.documentElement.removeEventListener('mousemove', move);
        document.documentElement.removeEventListener('mouseup', stop);
      } else {
        document.documentElement.removeEventListener('touchmove', move, { passive: false });
        document.documentElement.removeEventListener('touchend', stop);
      }
    }

    function dragStart(event) {
      if (!(navigator.maxTouchPoints)) {
        event.preventDefault();
        startX = event.clientX - capooDrag.offsetLeft;
        startY = event.clientY - capooDrag.offsetTop;
        document.documentElement.addEventListener('mousemove', move);
        document.documentElement.addEventListener('mouseup', stop);
      } else {
        startX = event.touches['0'].clientX - event.touches['0'].target.offsetLeft;
        startY = event.touches['0'].clientY - capooDrag.offsetTop;
        document.documentElement.addEventListener('touchmove', move);
        document.documentElement.addEventListener('touchend', stop);
      }
    }

    function optimizeDrag() {
      setInterval(() => {
        capooDrag.style.left = `${capooX}px`;
        capooDrag.style.top = `${capooY}px`;
      }, 20);
    }

    if (!(navigator.maxTouchPoints)) {
      capooDrag.addEventListener('mousedown', dragStart);
    } else {
      capooDrag.addEventListener('touchstart', dragStart);
      optimizeDrag();
    }
    // document.body.addEventListener('touchmove', (event) => {
    //   event.preventDefault();
    // }, false);

    return (() => {
      capooDrag.removeEventListener('mousedown', dragStart);
      capooDrag.removeEventListener('touchstart', dragStart);
      clearInterval(optimizeDrag);
    });
  }, []);

  return (
    <div className={styles.mainConcept}>
      <img
        id="capooDrag"
        src={logos.logo}
        alt="logo"
        className={styles.logo}
      />
      <NavigationBar
        areaChange={areaChange}
        iconArray={iconArray}
        clickIcon={clickIcon}
        optionArray={optionArray}
        clickOption={clickOption}
        capooImages={capooImages}
        animateCapoo={animateCapoo}
        notAnimateCapoo={notAnimateCapoo}
        optionOptionsArray={optionOptionsArray}
      />
      <Mainbody
        clickBlank={clickBlank}
      />
      <SideBody />
    </div>
  );
}
