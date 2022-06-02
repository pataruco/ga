'use strict';

// const element = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Hola 👋';
    }

    // return element(
    //   'button',
    //   { onClick: () => this.setState({ liked: true }) },
    //   'Click me',
    // );

    return (
      <button onClick={() => this.setState({ liked: true })}>Click me</button>
    );
  }
}

const domContainer = document.querySelector('#root');
// ReactDOM.render(element(LikeButton), domContainer);
ReactDOM.render(<LikeButton />, domContainer);
