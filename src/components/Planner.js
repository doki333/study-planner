import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { onInsert } from '../common/actions';
import Goal from './Goal';
import PlanList from './PlanList';
import { MdAdd } from 'react-icons/md';

const PlanBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .planPart {
    width: 512px;
    height: 435px;
    background: white;
    form {
      margin-left: 0.5rem;
      input {
        background: none;
        border: none;
        outline: none;
        border-bottom: 1px solid black;
        font-size: 1.3rem;
        padding: 0.3rem;
      }
      button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0.2rem 1rem;
        font-size: 1.5rem;
        line-height: 1;
        margin-left: 0.6rem;
      }
    }
    #title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      margin-left: 1rem;
      margin-top: 0.5rem;
      color: #03045e;
    }
  }
`;

function Planner() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      if (value.trimStart().trimEnd() === '') {
        e.preventDefault();
        return;
      }
      const newTodo = {
        text: value,
        checked: false,
      };
      dispatch(onInsert(newTodo));
      setValue('');
      e.preventDefault();
    },
    [value, dispatch],
  );

  return (
    <PlanBlock>
      <div className="planPart">
        <p id="title">TODAY'S PLAN</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            style={{ width: '85%' }}
            value={value}
            onChange={onChange}
          />
          <button>
            <MdAdd />
          </button>
        </form>
        <PlanList />
      </div>
      <Goal />
    </PlanBlock>
  );
}

export default Planner;
