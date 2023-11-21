import { useState } from "react";

export const OnClick = () => {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let [따봉, 따봉변경] = useState();

  return (
    <>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <button
            onClick={() => {
              let copy = [...글제목];
              copy[0] = "여자코트 추천";
              글제목변경(copy);
              //state변경함수 특징
              // 기존state == 신규state의 경우 변경안해줌

              //array / object 특징
              //array / object 담은 변수엔 화살표만 저장됨

              //state가 array / object면 독립적인 카피본(shallow copy)을 만들어서 수정해야함
            }}
          >
            변경
          </button>
          {/* 숙제 */}
          <button
            onClick={() => {
              let copy = [...글제목]; // state 안에 있는 배열을 가져와서 독립적인 카피본으로 만든다
              copy.sort(); // copy의 값을 sort()함수를 사용해서 오름차순으로 만들어준다
              글제목변경(copy); // 글제목변수를 글제목변경함수를 사용해서 바꿔준다 => 글제목을 가나다순으로 바꿔줌
            }}
          >
            가나다순
          </button>
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
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
    //onClick 쓰는법
    //1. onClick={ 안엔 함수 넣어야함}
    //2. state 변경하는법 => state변경함수(새로운 state)
  );
};
