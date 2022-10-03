/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
//import ApexCharts from 'apexcharts';
// 리액트는 데이터 바인딩이 매우 쉽다..!

function App() {
  let posts = '강남 고기 맛집'; // 이런거 JSX에 넣는게 데이터 바인딩
  //let posts = { color : 'blue', fontSize: '30x'}

  // ES6 destructuring, state : 변수를 저장할 수 있는 react 문법
  // 사용 이유 : react를 웹 앱처럼 사용하고 싶으면 써야됨.
  // 글 제목 수정 이나 순서 변경이 필요할 경우에 state가 변경되면 html이 자동으로 재렌더링됨
  // 변수로 넣었을 경우는 새로고침이 됨 (웹앱에선 매우 중요 - 웹앱은 변경 시 딜레이 없음)
  let [글제목, 글제목변경] = useState([
    {"name":'남자 코트 추천', "date":"2월 17일 발행", "good":0}, 
    {"name":'강남 우동 맛집', "date":"3월 17일 발행", "good":0},
  ]); 
  // return : [a, b] -> a는 넣은 문자열, b는 a를 변경하는 함수
  //let [좋아요, 좋아요변경] = useState(0);

  function 제목바꾸기(){ 
    var new_array = [...글제목]; // deep 카피 문법 [...array] ?
    new_array.sort()
    글제목변경( new_array );
  }

  function 좋아요변경(a){
    var new_array = [...글제목];
    new_array[a]["good"] += 1;

    글제목변경( new_array );
  }
  
  function 변경(){
    var new_array = [...글제목];

    new_array[0]["name"] = '여자 코트 추천'
    
    글제목변경( new_array );
  }

  // style은 무조건 중괄호, 오브젝트 형식으로, -안됨 -> Camel Case로 -> 귀찮으니 클래스 만들어씀
  return (
    <div className="App">
      <div className="black-nav">
        <div> Hwan001's Blog </div>
      </div>
      <button onClick={ 제목바꾸기 }>정렬</button>
      <button onClick={ 변경 }>변경</button>
    
      <div className='list'>
        <h3>{ 글제목[0]["name"] } <span onClick={ ()=>{ 좋아요변경(0) } }>👍</span>{ 글제목[0]["good"] }</h3>
          <p>{ 글제목[0]["date"] }</p>
        <hr/>
      </div>

      <div className='list'>
        <h3>{ 글제목[1]["name"] } <span onClick={ ()=>{ 좋아요변경(1) } }>👍</span>{ 글제목[1]["good"] }</h3>
          <p>{ 글제목[1]["date"] }</p>
        <hr/>
      </div>
      
      <Modal/>

    </div>
  );
}


// Component - 자주 바뀌고 반복되는 애들
function Modal1(){
  return(
    <div className='list'>
      <h3>{ 글제목[1]["name"] } <span onClick={ ()=>{ 좋아요변경(1) } }>👍</span>{ 글제목[1]["good"] }</h3>
        <p>{ 글제목[1]["date"] }</p>
      <hr/>
    </div>
  );
}

// 대문자로 시작해야됨 (관습적)
function Modal(){
  return(
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  );
}

export default App;