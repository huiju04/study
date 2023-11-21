import { useState } from "react";
import { Modal } from "./Modal";

export const Map = () => {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let [modal, setModal] = useState(false, false, false);
  let [좋아요, 좋아요변경] = useState(0, 0, 0);
  let [싫어요, 싫어요변경] = useState(0, 0, 0);

  return (
    <>
      {글제목.map(function (a, i) {
        // 첫번째 자리는 array에 있던 데이터,
        // 두번째 자리는 반복문 돌때마다 0부터 1씩 증가하는 정수

        // map()함수
        // 1. 왼쪽 array 자료만큼 내부코드 실행해줌
        // 2. return 오른쪽에 있는걸 array로 담아줌
        // 3. 유용한 파라미터 2개 사용가능
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                let copy = [...setModal];
                copy[i] = setModal[i](true);
                {
                  modal[i] == true ? setModal[i](false) : <SModal />;
                }
                setModal(copy);
              }}
            >
              {a}
              <span
                onClick={() => {
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  좋아요변경(copy);
                }}
              >
                👍
              </span>
              {좋아요}

              <span
                onClick={() => {
                  let copy = [...싫어요변경];
                  copy[i] = 싫어요[i];
                  싫어요변경(copy);
                }}
              >
                👎
              </span>
              {싫어요}
            </h4>
            <p>2월 17일 발행</p>
            {modal == true ? <SModal /> : null}
          </div>
        );
      })}
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
  }
};
