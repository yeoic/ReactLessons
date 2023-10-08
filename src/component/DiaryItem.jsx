import React from "react";

function DiaryItem({ author, content, created_date, emotion, id }) {
  return (
    <div className="my-4 bg-gray-200 p-5" key={id}>
      <div>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <div>작성자 : {new Date(created_date).toLocaleString()}</div>
      </div>
      <div className="mt-5 border-t border-gray-400 pb-4 pt-7 font-semibold">
        {content}
      </div>
    </div>
  );
}

export default DiaryItem;
