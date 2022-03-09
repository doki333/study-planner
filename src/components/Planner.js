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
      display: flex;
      width: 100%;
      height: 40px;
      input {
        flex: 1;
        width: 460.9px;
        background: #e7f0f5;
        height: 40px;
        border: none;
        outline: none;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1rem;
      }
      button {
        height: 42px;
        width: 3rem;
        background: #00b4d8;
        color: white;
        border: none;
        outline: none;
        cursor: pointer;
        svg {
          font-size: 2rem;
        }
        &:hover {
          background: #03045e;
          svg {
            transition: 1s ease-out;
            transform: rotate(-90deg);
          }
        }
      }
    }
    #title {
      margin: 0;
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
      margin-top: 0.3rem;
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
        <form onSubmit={onSubmit}>
          <input
            type="text"
            // style={{ width: '85%' }}
            value={value}
            onChange={onChange}
          />
          <button>
            <MdAdd />
          </button>
        </form>
        <p id="title">TODAY'S PLAN</p>
        <PlanList />
      </div>
      <Goal />
    </PlanBlock>
  );
}

export default Planner;
