import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { NavigationBar } from './JSX/navigation.jsx';

function addElement() {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'root');
  document.body.appendChild(newDiv);
}

document.body.onload = addElement();

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
