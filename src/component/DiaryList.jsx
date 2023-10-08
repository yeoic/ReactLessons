import React, { useEffect } from "react";
import DiaryItem from "./DiaryItem";

function DiaryList({ diaryList }) {
  return (
    <div className="w-[600px] border-b border-gray-400 p-10">
      <p className="mb-4 text-center text-3xl font-semibold">일기 리스트</p>
      <p>{diaryList.length} 개의 일기가 있습니다.</p>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
