'use strict';

// const element = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'Hello JSD 14 👋';
//     }

//     // return element(
//     //   'button',
//     //   { onClick: () => this.setState({ liked: true }) },
//     //   'Click me JSD 14',
//     // );

//     return (
//       <button onClick={() => this.setState({ liked: true })}>
//         Click me JSD 14
//       </button>
//     );
//   }
// }

const { useState } = React;
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return liked ? (
    'Hello JSD 14 👋'
  ) : (
    <button onClick={() => setLiked(true)}>Click me JSD 14</button>
  );
};

const domContainer = document.querySelector('#root');
// ReactDOM.render(element(LikeButton), domContainer);
ReactDOM.render(<LikeButton />, domContainer);
