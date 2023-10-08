import "./App.css";
import React from "react";
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";

function App() {
  const dummyList = [
    {
      id: 1,
      author: "이정환",
      content: "하이",
      emotion: 5,
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      author: "홍길동",
      content: "하이 1",
      emotion: 4,
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      author: "아무개",
      content: "하이 2",
      emotion: 3,
      created_date: new Date().getTime(),
    },
  ];

  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
