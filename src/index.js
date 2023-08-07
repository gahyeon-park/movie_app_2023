import React from 'react';
import ReactDOM from 'react-dom/client';
import App3 from './App3';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// ※ StrictMode일 경우, 링크 클릭 시 url은 바뀌지만 화면 이동이 일어나지 않는 이슈 있음.
root.render(
  // <React.StrictMode>
    <App3 />
  // </React.StrictMode>
);

// ReactDOM.render(<App3 />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
