'use strict';

const element = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Hello JSD 14 👋';
    }

    return element(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Click me JSD 14',
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(element(LikeButton), domContainer);
