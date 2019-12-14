import React from 'react';

class ColourToggleButton extends React.Component {
  state = { currentColour: 'light' };

  toggleColour = () => {
    if (this.state.currentColour === 'light') {
      this.setState({ currentColour: 'dark' });
    } else {
      this.setState({ currentColour: 'light' });
    }

    this.props.updateBackgroundColour(this.state.currentColour);
  };

  render() {
    return (
      <div className="ui container">
        <button className="ui button" onClick={this.toggleColour}>
          {this.state.currentColour}
        </button>
      </div>
    );
  }
}

export default ColourToggleButton;
