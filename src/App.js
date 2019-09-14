import React from 'react';
import './App.css';
import Menu from './components/Accordion'
import Title from './components/Jumbotron'

class App extends React.Component {

  render() {
    return (
      <div>
        <Title />
        <Menu />
      </div>
    );
  }
}

export default App;
