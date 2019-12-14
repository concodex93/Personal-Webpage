import React from 'react';
import Profile from './Profile';
import ColourToggleButton from './ColourToggleButton';
import { DIV } from '../styles/AppStyle';

class App extends React.Component {
  state = { background: '#fffefc' };

  updateBackgroundColour = toggleStatus => {
    if (toggleStatus === 'light') {
      this.setState({ background: '#282a36' });
    } else {
      this.setState({ background: '#fffefc' });
    }
  };

  render() {
    return (
      <DIV style={{ backgroundColor: `${this.state.background}` }}>
        <div>
          <ColourToggleButton
            updateBackgroundColour={this.updateBackgroundColour}
          />
          <Profile />
        </div>
      </DIV>
    );
  }
}

export default App;
