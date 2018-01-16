import React from 'react';
import { render } from 'react-dom';
import MadLib1 from './madlib1'

const styles = {
  backgroundColor: 'lightblue',
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: 100 + 'vw',
  height: 100 + 'vh',
};

const App = () => (
  <div style={styles}>
    <h1>Mad Libs!</h1>
    <MadLib1 />
  </div>
)

render(<App />, document.getElementById('root'));
