import React from 'react';

class ColourToggleButton extends React.Component {
  state = { currentColour: 'light' };

  toggleColour = () => {
    if (this.state.currentColour === 'light') {
      this.setState({ currentColour: 'dark' });
    } else {
      this.setState({ currentColour: 'light' });
    }

    this.props.updateColours(this.state.currentColour);
  };

  render() {
    return (
      <div className="ui container" style={{ padding: '5px' }}>
        <button className="ui button" onClick={this.toggleColour}>
          {this.state.currentColour}
        </button>
      </div>
    );
  }
}

export default ColourToggleButton;
