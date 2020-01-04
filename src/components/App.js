import React from 'react';
import Profile from './Profile';
import ColourToggleButton from './ColourToggleButton';
import { DIV } from '../styles/AppStyle';

class App extends React.Component {
  state = { background: '#fffefc', font: '#263238' };

  updateColours = currentColour => {
    if (currentColour === 'light') {
      this.setState({ background: '#282a36', font: '#fffefc' });
    } else {
      this.setState({ background: '#fffefc', font: '#263238' });
    }
  };

  render() {
    return (
      <DIV
        style={{
          backgroundColor: `${this.state.background}`,
          color: `${this.state.font}`
        }}
      >
        <div>
          <ColourToggleButton updateColours={this.updateColours} />
          <Profile updateColours={this.updateColours} />
        </div>
      </DIV>
    );
  }
}

export default App;
