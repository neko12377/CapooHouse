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
  const itemNumber = {
    optionNumber: 5,
    useNumber: 1,
  };

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

  const [useArray, setUseArray] = useState(
    Array(itemNumber.useNumber).fill(styles.blockOfOptionNList),
  );

  const [useOptionsArray, setUseOptionsArray] = useState(
    Array(itemNumber.useNumber).fill(styles.notShow),
  );

  function clickBlank() {
    setOptionArray(
      Array(itemNumber.optionNumber).fill(styles.blockOfOptionNList),
    );
    setCapooImages(
      capooImagesArray,
    );
    setOptionOptionsArray(
      Array(itemNumber.optionNumber).fill(styles.notShow),
    );
    setUseArray(
      Array(itemNumber.useNumber).fill(styles.blockOfOptionNList),
    );
    setUseOptionsArray(
      Array(itemNumber.optionNumber).fill(styles.notShow),
    );
  }

  function animateCapoo(indexOfImages) {
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
      const useArrayCopy = useArray.slice();
      useArrayCopy.fill(styles.blockOfOptionNList);
      setUseArray(useArrayCopy);
    }
  }

  function notAnimateCapoo() {
    if (!(navigator.maxTouchPoints)) {
      setOptionArray(Array(itemNumber.optionNumber).fill(styles.blockOfOptionNList));
      setOptionOptionsArray(Array(itemNumber.optionNumber).fill(styles.notShow));
      setCapooImages(capooImagesArray);
    }
  }

  function usesHover(indexOfUses) {
    if (!(navigator.maxTouchPoints)) {
      const useArrayCopy = useArray.slice();
      const useOptionsArrayCopy = useOptionsArray.slice();
      useArrayCopy[indexOfUses] = styles.blockOfOptionNListTriggered;
      useOptionsArrayCopy[indexOfUses] = styles.optionOptions;
      setUseArray(useArrayCopy);
      setUseOptionsArray(useOptionsArrayCopy);
      setOptionArray(
        Array(itemNumber.optionNumber).fill(styles.blockOfOptionNList),
      );
      setCapooImages(
        capooImagesArray,
      );
      setOptionOptionsArray(
        Array(itemNumber.optionNumber).fill(styles.notShow),
      );
    }
  }

  function leaveUses() {
    if (!(navigator.maxTouchPoints)) {
      setUseArray(Array(itemNumber.useNumber).fill(styles.blockOfOptionNList));
      setUseOptionsArray(Array(itemNumber.useNumber).fill(styles.notShow));
    }
  }

  // optimizing for touchable devices
  function clickOption(indexOfOption) {
    if (navigator.maxTouchPoints) {
      // Keep primary array immutable via copy it
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
      // set other navgation area to primary state
      const useArrayCopy = useArray.slice();
      useArrayCopy.fill(
        styles.blockOfOptionNList,
      );
      setUseArray(useArrayCopy);
    }
  }

  // useEffect(() => {
  //   const capooDrag = document.getElementById('capooDrag');
  //   const capooDragCoordinate = capooDrag.getBoundingClientRect();
  //   const dragableArea = {
  //     left: 0,
  //     top: 0,
  //     right: document.documentElement.clientWidth
  //       - capooDragCoordinate.width,
  //     bottom: document.documentElement.scrollHeight
  //       - capooDragCoordinate.height,
  //   };

  //   let startX;
  //   let startY;

  //   let capooX;
  //   let capooY;

  //   function move(event) {
  //     if (!navigator.maxTouchPoints) {
  //       let x = event.clientX - startX;
  //       let y = event.clientY - startY;
  //       x = Math.max(Math.min(x, dragableArea.right), dragableArea.left);
  //       y = Math.max(Math.min(y, dragableArea.bottom), dragableArea.top);
  //       capooDrag.style.left = `${x}px`;
  //       capooDrag.style.top = `${y}px`;
  //     } else {
  //       event.preventDefault();
  //       capooX = event.touches['0'].clientX - startX;
  //       capooY = event.touches['0'].clientY - startY;
  //       capooX = Math.max(Math.min(capooX, dragableArea.right), dragableArea.left);
  //       capooY = Math.max(Math.min(capooY, dragableArea.bottom), dragableArea.top);
  //     }
  //   }

  //   function stop() {
  //     if (!(navigator.maxTouchPoints)) {
  //       document.documentElement.removeEventListener('mousemove', move);
  //       document.documentElement.removeEventListener('mouseup', stop);
  //     } else {
  //       document.documentElement.removeEventListener('touchmove', move, { passive: false });
  //       document.documentElement.removeEventListener('touchend', stop);
  //     }
  //   }

  //   function dragStart(event) {
  //     capooDrag.style.position = 'fixed';
  //     if (!(navigator.maxTouchPoints)) {
  //       event.preventDefault();
  //       startX = event.clientX - capooDrag.offsetLeft;
  //       startY = event.clientY - capooDrag.offsetTop;
  //       document.documentElement.addEventListener('mousemove', move);
  //       document.documentElement.addEventListener('mouseup', stop);
  //     } else {
  //       startX = event.touches['0'].clientX - event.touches['0'].target.offsetLeft;
  //       startY = event.touches['0'].clientY - capooDrag.offsetTop;
  //       document.documentElement.addEventListener('touchmove', move, { passive: false });
  //       document.documentElement.addEventListener('touchend', stop);
  //     }
  //   }

  //   function optimizeDrag() {
  //     setInterval(() => {
  //       capooDrag.style.left = `${capooX}px`;
  //       capooDrag.style.top = `${capooY}px`;
  //     }, 20);
  //   }

  //   function goHome() {
  //     capooDrag.style.cssText = "position: '', left: '', top: ''";
  //   }

  //   if (!(navigator.maxTouchPoints)) {
  //     capooDrag.addEventListener('mousedown', dragStart);
  //     capooDrag.addEventListener('dblclick', goHome);
  //   } else {
  //     capooDrag.addEventListener('touchstart', dragStart);
  //     optimizeDrag();
  //   }

  //   return (() => {
  //     capooDrag.removeEventListener('mousedown', dragStart);
  //     capooDrag.removeEventListener('touchstart', dragStart);
  //     clearInterval(optimizeDrag);
  //   });
  // }, []);

  useEffect(() => {
    function moveWithCursor(event) {
      const capooDrag = document.getElementById('capooDrag');
      capooDrag.style.display = 'flex';
      capooDrag.style.position = 'absolute';
      capooDrag.style.left = `${event.pageX + 8}px`;
      capooDrag.style.top = `${event.pageY + 8}px`;
    }

    document.documentElement.addEventListener('mousemove', moveWithCursor);
  }, []);

  return (
    <div className={styles.mainConcept}>
      <NavigationBar
        // for animate options
        optionArray={optionArray}
        optionNumber={itemNumber.optionNumber}
        capooImages={capooImages}
        animateCapoo={animateCapoo}
        notAnimateCapoo={notAnimateCapoo}
        optionOptionsArray={optionOptionsArray}
        // for touchable devices
        clickOption={clickOption}
        // for FontAwesome uses
        useArray={useArray}
        usesHover={usesHover}
        leaveUses={leaveUses}
        useOptionsArray={useOptionsArray}
      />
      <Mainbody
        logo={logos.logo}
        clickBlank={clickBlank}
      />
      <SideBody />
    </div>
  );
}
