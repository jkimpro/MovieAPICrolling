import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
// react 는 app.js 컴포넌트를 root 에 넣으려고 하고 있다.
// react 는 virtual DOM을 중심으로 작동하고 있음
// <App /> -> 이것을 component 라고 함 HTML을 반환하는 함수 이다.
// 컴포넌트는 HTML을 반환하는 함수다.
// HTML과 Javascript 사이에 나온 것이 Jsx ( react에 특화된 개념)
// javascript 위에서 배우는 것 JSX
*/


ReactDOM.render(<App />,  document.getElementById("potato"));

/*
//하나의 컴포넌트만 렌더링 가능함 따라서, Potato를 렌더링 하고 싶으면 app.js 조작이 불가피하다. 
// 서버는 별도로 없기때문에 npm start 하고 그상태로 두어야함.
*/