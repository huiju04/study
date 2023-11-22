import { useState } from "react";

export const Props = () => {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let [modal, setModal] = useState([false, false, false]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [싫어요, 싫어요변경] = useState([0, 0, 0]);
  let [title, setTitle] = useState(0);

  return (
    <>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setTitle(i); //props로 전달해서 누르면 각각 0,1,2가 잘들어가게 해줌

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
              onClick={() => {
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
            {/* ex) {modal[i] == true ? <Modal color={"pink"} 글제목={글제목} /> : null} */}

            {/* 
            부모-> 자식 state 전송하려면 props문법 쓰면 되는데

            1. 자식컴포넌트 사용하는 곳에 가서 <자식컴포넌트 작명={state이름} /> 
            2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용
            3. props는 부모 자식관계만 가능
            */}
          </div>
        );
      })}
    </>
  );
  function Modal(props) {
    return (
      <div className="modal">
        {/* ex) <div className="modal" style={{ background: props.color }}> */}
        {/* 파라미터문법은 다양한 기능을 하는 함수를 만들떄 사용함
            실은 props도 파라미터 문법일 뿐
            props로 일반 문자 가능
        */}
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

// props 공부 더 하기
