import { useState } from "react";

export const Input = () => {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let [modal, setModal] = useState([false, false, false]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [싫어요, 싫어요변경] = useState([0, 0, 0]);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setTitle(i);

                let copy = [...modal];
                copy[i] = true;
                {
                  modal[i] == true ? (copy[i] = false) : <Modal />;
                }
                setModal(copy);
              }}
            >
              {a}
            </h4>
            <span
              onClick={() => {
                let copy = [...좋아요];
                copy[i] = copy[i] + 1;
                좋아요변경(copy);
              }}
            >
              👍
            </span>
            {좋아요[i]}

            <span
              onClick={(e) => {
                e.stopPropagation(); //이벤트 버블링을 막아주는 기능
                let copy = [...싫어요];
                copy[i] = copy[i] + 1;
                싫어요변경(copy);
              }}
            >
              👎
            </span>
            {싫어요[i]}
            <p>2월 17일 발행</p>

            {modal[i] == true ? (
              <Modal 글제목={글제목} 글제목변경={글제목변경} title={title} />
            ) : null}

            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
                // 글제목.splice(i, 1); //내가 한거
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          //state변경함수는 늦게 처리됨(리액트 만든 놈이 그리 만듬)
          입력값변경(e.target.value); //이거 완료하기 전에
          console.log(입력값); // 다음줄을 실행해줌
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
          // 글제목.push(입력값); //내가 한거
        }}
      >
        입력
      </button>
    </>
  );
  function Modal(props) {
    return (
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>

        <p>날짜</p>
        <p>상세내용</p>
        <button
          onClick={() => {
            props.글제목변경(["여자코트 추천", "강남 우동맛집", "파이썬독학"]);
          }}
        >
          글수정
        </button>
      </div>
    );
  }
};
