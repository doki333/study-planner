import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { BsCheck2Circle } from 'react-icons/bs';

const GoalBlock = styled.div`
  height: 104px;
  width: 512px;
  background: #c2d6e1;

  p {
    margin: 0;
    padding-left: 0.5rem;
    padding-top: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
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
      padding-left: 0.5rem;
      padding-right: 1rem;
      background: none;
      border: none;
      outline: none;
      height: 55px;
      font-family: 'Fredoka', sans-serif;
      font-family: 'Noto Sans KR', sans-serif;
    }
    button {
      border: none;
      background: none;
      cursor: pointer;
      /* outline: none; */
      font-size: 1.5rem;
    }
    .editing {
      color: #5f95b2;
      cursor: default;
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
        <button className={editing ? 'editing' : ''}>
          <BsCheck2Circle />
        </button>
      </form>
    </GoalBlock>
  );
}

export default React.memo(Goal);
