import React from 'react';

// Detail, Home, Movie 컴포넌트 모두 <Route />에 있기 때문에 props({history: {}, location: {}, match: {} ..}) 들을 받을 수 있음

// function Detail({ location }) {
//   console.log(location);
//   return (
//     <span>hello</span>
//   )
// }

// ※ Link 클릭이 아닌 url을 직접 치고 진입하는 경우에는 location props를 받을 수 없음. 
// └> 화면에 그릴 props 정보를 담고있는 location.state를 받을 수 없다.
// ∴ 위와 같이 location 정보가 들어오지 않는 경우를 처리해야 함.
// └> location 정보가 없을 경우에는 Home화면으로 이동시키자.
//  그러려면, 리액트 라이프사이클(componentDidMount)과 render함수를 이용해 핸들링한다.
//  리액트 라이프사이클(componentDidMount)과 render함수를 쓰기 위해 함수형 컴포넌트에서 class 컴포넌트로 전환해준다.

class Detail extends React.Component {

  componentDidMount() {
    console.log('mounted');
    console.log(this.props);
    const { location, history } = this.props;
    if(location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    console.log('rendering');
    const { location } = this.props;
    if(location.state) {
      return <span>{location.state.title}</span>
    } else {
      // render가 componentDidMount보다 먼저 실행되므로, render에서 url로 진입 시 props를 못받는 경우도 처리해주어야 함
      return null;
    }
  }
}

export default Detail;