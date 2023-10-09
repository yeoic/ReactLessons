import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import DiaryEditor from "./component/DiaryEditor";
import DiaryList from "./component/DiaryList";

function App() {
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
    ).then((res) => res.json());
    console.log(res);

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime().toLocaleString(),
        id: dataId.current++,
      };
    });

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

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
