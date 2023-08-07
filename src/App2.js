import React from 'react';
// import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({ count: current.count + 1 }))
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }))
  }

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('I just updated');
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  // class 컴포넌트는 React.Component로부터 확장되었으며,
  // ∴ react.Component의 render 메소드를 쓸 수 있고, React.Component 내부의 react는 자동적으로 class 컴포넌트의 render 메소드를 실행함
  render() {
    console.log('I\'m rendering');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;