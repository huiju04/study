/*eslint-disable*/ //WARNING 메세지 지우는 기능

import { useState } from "react";

export const State = () => {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  //1번째 자리는 state에 보관했전 자료나옴
  //2번째 자리는 state 변경을 도와주는 함수
  // 자주 변경될거 같은 html부분은 state로 만들기

  return (
    <>
      {/* 배운거 */}
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>

      {/* 숙제 */}
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </>
  );
};
