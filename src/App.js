import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Image sizes(px) to support
 * Desktop - 700, 1400
 * Mobile - 400, 800, 1200
 */
let imgBrisbane_700_1x = require('./img/700w.jpg'); 
let imgBrisbane_700_2x = require('./img/1400w.jpg'); 
let imgBrisbane_400_1x = require('./img/400w.jpg'); 
let imgBrisbane_400_2x = require('./img/800w.jpg'); 
let imgBrisbane_400_3x = require('./img/1200w.jpg'); 

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <main className="app-main">
          <p className="app-intro">
            To get started, edit <code>src/App.js</code> and save to reload. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <img 
            src={imgBrisbane_700_1x}
            alt="Brisbane lighthouse"
            srcSet={imgBrisbane_400_1x + ' 400w, ' + imgBrisbane_700_1x + ' 700w, ' + 
              imgBrisbane_400_2x + ' 800w, ' + imgBrisbane_400_3x + ' 1200w, ' + imgBrisbane_700_2x + ' 1400w'}
            sizes="(max-width: 700px) 100vw, 700px"/>
          <p className="app-intro">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
