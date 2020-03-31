// nav-bar options
import React from 'react';
import styles from '../index.scss';

export default function NavOption(props) {
  const {
    optionClass,
    clickOption,
    optionIndex,
    capooImages,
    animateCapoo,
    notAnimateCapoo,
    optionOptionsArray,
  } = props;

  const optionDescription = [
    '主題商店',
    '今日咖波',
    '咖波訊息',
    '聊天',
    'line貼圖',
    '設定',
  ];

  const optionLists = [
    ['咖波屋', '奶泡貓咖啡'], // 0
    ['每日咖波幣', '好運咖波'], // 1
    ['活動通知', '回覆通知'], // 2
    ['社群一', '社群二'], // 3
    [
      (
        <p>
          貓貓蟲-咖波
          <br />
          超可愛訊息貼圖
        </p>
      ),
      (
        <p>
          貓貓蟲-咖波
          <br />
          可愛好用篇
        </p>
      ),
      (
        <p>
          貓貓蟲-咖波
          <br />
          日常好用篇
        </p>
      ), // 4
    ],
  ];

  const links = [
    ['https://www.facebook.com/CapooHouse/',
      'https://www.facebook.com/foamcatcafe/'],
    [],
    [],
    [],
    ['https://store.line.me/stickershop/product/16897/zh-Hant',
      'https://store.line.me/stickershop/product/9044256/zh-Hant',
      'https://store.line.me/stickershop/product/3195138/zh-Hant?from=sticker',
    ],
    [],
  ];

  const alternative = [
    'homepage',
    'dance',
    'mail',
    'conversation',
    'line_sticker',
  ];

  function creatListItems(item, index) {
    return (
      <a
        key={`${item}${optionIndex}${index}optionOptions`}
        href={links[optionIndex][index]}
        target="_blank"
      >
        {item}
      </a>
    );
  }

  function optionOptions(listIndex) {
    return (
      optionLists[listIndex].map(
        (item, index) => creatListItems(item, index),
      )
    );
  }
  // nav-bar options
  return (
    <div
      className={optionClass}
      onMouseOver={animateCapoo}
      onMouseOut={notAnimateCapoo}
      onFocus={animateCapoo}
      onBlur={notAnimateCapoo}
    >
      <div
        className={styles.navOptions}
        onClick={clickOption}
        onKeyPress={clickOption}
        role="button"
        aria-label="navOption"
        tabIndex={0}
      >
        <div className={styles.capooContainer}>
          <img
            className={styles.capooImage}
            src={capooImages[optionIndex]}
            alt={alternative[optionIndex]}
          />
        </div>
        <div className={styles.optionDescriptions}>
          {optionDescription[optionIndex]}
        </div>
      </div>
      <ul className={optionOptionsArray[optionIndex]}>
        {optionOptions(optionIndex)}
      </ul>
    </div>
  );
}
