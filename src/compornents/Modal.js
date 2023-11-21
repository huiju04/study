import { useState } from "react";

export const Modal = () => {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let [modal, setModal] = useState(false);

  return (
    <>
      <div className="list">
        <h4
          onClick={() => {
            setModal(true);
            {
              modal == true ? setModal(false) : <Modal />;
            }
          }}
        >
          {글제목[0]}
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

      {modal == true ? <SModal /> : null}
      {/* 동적인 ul만드는 step
      1. html css로 미리 디자인 완성
      2. ul의 현재 상태를 state로 저장됨
      3. state에 따라 ul가 어떻게 보일지 작성
      ex)
      {modal == true ? <Modal /> : null} 
      */}
    </>
  );
  function SModal() {
    return (
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );

    //  컴포넌트 장점
    //   1. 반복적인 html축약
    //   2. 큰 페이지틀
    //   3. 자주 변경되는것

    //  컴포넌트 단점
    //   state 가져쓸때 문제생김
  }
};
