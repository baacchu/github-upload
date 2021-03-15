import React from 'react';
import ReactDOM from 'react-dom'

import './index.scss';

import GameGallery from '../src/components/GameGallery/GameGallery';

const App = () => {
  return (
    <div className="container header-container">         
      <GameGallery />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));