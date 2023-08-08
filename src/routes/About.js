import React from "react";

function About(props) {
  // 라우터에 있는 모든 라우트들은 props({history: {}, location: {}, match: {} ..})를 가짐
  console.log(props);
  return <span>About this page: I built it because I love movies.</span>
}

export default About;