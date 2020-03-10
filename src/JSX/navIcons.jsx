// nav-bar icons
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../index.scss';

const iconImages = [
  faCogs, faCogs, faCogs,
];

export default function NavIcons(props) {
  const { iconClass, clickIcon, iconImage } = props;

  const navIconStyles = [
    styles.navIcons, styles.navIcons1, styles.navIcons2,
  ];

  return (
    <div className={styles.blockOfIconNList}>
      <div
        className={navIconStyles[iconImage]}
        onClick={clickIcon}
        onKeyPress={clickIcon}
        role="button"
        aria-label="navIcon"
        tabIndex={0}
      >
        <FontAwesomeIcon icon={iconImages[iconImage]} />
      </div>
      <ul className={iconClass}>
        <li>一號</li>
        <li>二號</li>
        <li>三號</li>
        <li>一號</li>
        <li>二號</li>
        <li>三號</li>
      </ul>
    </div>
  );
}
