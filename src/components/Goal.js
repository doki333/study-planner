import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const GoalBlock = styled.div`
  height: 104px;
  width: 512px;
  background: #a7c5d5;
  /* font-family: 'Fredoka', sans-serif;
  font-family: 'Noto Sans KR', sans-serif; */
  p {
    margin: 0;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    border-bottom: 1px solid black;
  }
  form {
    display: flex;
    textarea {
      margin: 0;
      resize: none;
      width: 90%;
      font-size: 0.9rem;

      padding-top: 0.5rem;
      padding-bottom: 0.6rem;
      padding-left: 1rem;
      padding-right: 1rem;
      background: none;
      border: none;
      outline: none;
      height: 55px;
    }
    button {
      border: none;
      background: white;
    }
  }
`;

function Goal() {
  const [para, setPara] = useState('');
  const [editing, setEditing] = useState(true);

  const onClick = useCallback((e) => {
    setEditing(false);
  }, []);
  const onChange = useCallback((e) => {
    setPara(e.target.value);
  }, []);
  const onAdd = useCallback(
    (e) => {
      if (editing) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      setEditing(true);
    },
    [editing],
  );
  return (
    <GoalBlock>
      <p>MEMO</p>
      <form onSubmit={onAdd}>
        <textarea
          placeholder="메모를 입력하세요"
          onClick={onClick}
          value={para}
          onChange={onChange}
          readOnly={editing}
        />
        <button>입력</button>
        {/* <div
          style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
        >
          <button>입력</button>
        </div> */}
      </form>
    </GoalBlock>
  );
}

export default React.memo(Goal);
