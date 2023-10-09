import "./App.css";
import React, { useRef, useState } from "react";
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newItem = data.filter((it) => it.id !== targetId);
    setData(newItem);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it,
      ),
    );
  };

  // const dummyList = [
  //   {
  //     id: 1,
  //     author: "이정환",
  //     content: "하이",
  //     emotion: 5,
  //     created_date: new Date().getTime(),
  //   },
  //   {
  //     id: 2,
  //     author: "홍길동",
  //     content: "하이 1",
  //     emotion: 4,
  //     created_date: new Date().getTime(),
  //   },
  //   {
  //     id: 3,
  //     author: "아무개",
  //     content: "하이 2",
  //     emotion: 3,
  //     created_date: new Date().getTime(),
  //   },
  // ];

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} diaryList={data} onRemove={onRemove} />
    </div>
  );
}

export default App;
