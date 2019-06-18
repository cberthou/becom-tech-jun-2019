import React from 'react';
import './App.scss';

import './Themes/darcula.css';

import Deck from './Components/RevealComponents/Deck';
import Slides from './Slides';

// Setup the slide theme
import 'reveal.js/css/theme/solarized.css';

function App() {
  return (
    <div className="App">
      <Deck>
        {Slides}
      </Deck>
    </div>
  );
}

export default App;
