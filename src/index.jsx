import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

function Capoo() {
  return (
    <ul>
      [
      <li>443</li>
      ,
      <li>4123</li>
      ,
      <li>998</li>
      ,
      ]
    </ul>
  );
}

ReactDom.render(
  <Capoo />,
  document.getElementById('root'),
);
