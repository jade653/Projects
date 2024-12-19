import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState(""); //input 값 전달을 위한 state
  const contentRef = useRef();

  const onChangeContent = (e) => {
    //이벤트핸들러 함수
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return; //onCreate 호출하지 않도록 return 시킴
    }
    //App component의 onCreate 함수 실행되면서 todos에 새로운 todo item 생성
    onCreate(content); //input 태그에 작성된 값 전달
    setContent(""); //content 초기화
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit} /*onClick 이벤트 핸들러로 onSubmit 함수*/>
        추가
      </button>
    </div>
  );
};

export default Editor;
