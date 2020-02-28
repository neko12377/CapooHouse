import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss'
import { NavigationBar } from './JSX/navigation.jsx';

function Capoo() {
  return (
    <div>
      <NavigationBar />
      
    </div>
  );
}

ReactDom.render(
  <Capoo />,
  document.getElementById('root'),
);
