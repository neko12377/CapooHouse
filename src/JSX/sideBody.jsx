import React from 'react';
import styles from '../index.scss';

export default function SideBody() {
  const newsContent = [
    'Hello',
    'World',
    'Nice',
    'To',
    'Meet',
    'Capoo',
  ];

  function newsClusterElement(content, index) {
    return (
      <div
        key={`news_${index}`}
        className={styles.newsContent}
      >
        {content}
      </div>
    );
  }

  const newsCluster = newsContent.map(
    (content, index) => newsClusterElement(content, index),
  );


  return (
    <div className={styles.sideBody}>
      <div className={styles.sideBodyFixed}>
        <div className={styles.whatsNewBlock}>
          <div className={styles.newsBlock}>
            {newsCluster}
            <div className={styles.newsBlockBottom}>
              更多
            </div>
          </div>
          <div className={styles.newsImageBlock}>
            <div className={styles.newsImage}>
              <img
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
        <p className={styles.copyRight}>
          © Copyright Kasper Chen 2020.
          {'\n'}
          © Copyright of Images belongs to Yara(亞拉)
        </p>
      </div>
    </div>
  );
}
