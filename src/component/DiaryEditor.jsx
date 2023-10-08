import React, { useRef, useState } from "react";

function DiaryEditor(props) {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const authorInput = useRef();
  const contentInput = useRef();

  const handleSubmit = (e) => {
    if (state.author.length < 1) {
      alert("작성자는 최소 1 글자 이상 입력해주세요.");
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      alert("일기 본문은 최소 5글자 이상 입력해주세요.");
      contentInput.current.focus();
      return;
    }
    alert("저장 성공!");
  };

  return (
    <div className="mb-1 mt-10 w-[600px] border-b border-gray-400 p-10">
      <div className="container flex flex-col">
        <p className="my-7 text-center text-4xl">오늘의 일기</p>
        <input
          name="author"
          ref={authorInput}
          className="mb-5 h-10 border border-black"
          placeholder="작성자"
          onChange={handleChangeState}
        />
        <textarea
          name="content"
          ref={contentInput}
          className="h-48 border border-black"
          placeholder="일기 내용"
          onChange={handleChangeState}
        />
        <div className="mt-5 flex justify-center">
          <p className="">오늘의 감정 점수 : </p>
          <select
            name="emotion"
            className="ml-2 w-60 border border-black"
            onChange={handleChangeState}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button
          className="mt-4 h-12 border border-black bg-slate-300"
          onClick={handleSubmit}
        >
          필기 저장하기
        </button>
      </div>
    </div>
  );
}

export default DiaryEditor;
