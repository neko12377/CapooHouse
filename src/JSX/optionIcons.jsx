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
    ['貼圖一', '貼圖二', '貼圖三'], // 4
  ];

  const alternative = [
    'homepage',
    'dance',
    'mail',
    'conversation',
    'line_sticker',
  ];

  function stopBubbling(event) {
    // console.log(event.target);
  }

  function creatListItems(item) {
    return (
      <option
        key={`${item}Z`}
        onMouseOver={stopBubbling}
        onKeyPress={stopBubbling}
        onFocus={stopBubbling}
      >
        {item}
      </option>
    );
  }

  function optionOptions(listIndex) {
    return (
      optionLists[listIndex].map(
        (item) => creatListItems(item),
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
