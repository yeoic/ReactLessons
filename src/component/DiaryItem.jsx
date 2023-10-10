import React, { useEffect, useRef, useState } from "react";

function DiaryItem({
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
  onEdit,
}) {
  useEffect(() => {
    console.log(`${id}번쨰 아이템 렌더!`);
  }, []);

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const [localContent, setLocalContent] = useState(content);

  const [isEdit, setIsEdit] = useState(false);

  const localContentInput = useRef();

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focue();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`))
      onEdit(id, localContent);
    toggleIsEdit();
  };

  return (
    <div className="my-4 bg-gray-200 p-5" key={id}>
      <div>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <div>작성자 : {new Date(created_date).toLocaleString()}</div>
      </div>

      {isEdit ? (
        <div className="mt-5 border-t border-gray-400 pb-4 pt-7 font-semibold">
          <textarea
            className="w-[480px]"
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
            ref={localContentInput}
          />
        </div>
      ) : (
        <div className="mt-5 border-t border-gray-400 pb-4 pt-7 font-semibold">
          {content}
        </div>
      )}
      {isEdit ? (
        <div className="flex justify-end">
          <button
            className="mr-1 rounded bg-blue-600 p-1.5 text-white"
            onClick={handleEdit}
          >
            수정완료
          </button>
          <button
            className="rounded bg-red-600 p-1.5 text-white"
            onClick={handleQuitEdit}
          >
            수정취소
          </button>
        </div>
      ) : (
        <div className="flex justify-end">
          <button
            className="mr-1 rounded bg-blue-600 p-1.5 text-white"
            onClick={toggleIsEdit}
          >
            수정하기
          </button>
          <button
            className="rounded bg-red-600 p-1.5 text-white"
            onClick={handleRemove}
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(DiaryItem);
