import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { onInsert, onToggle } from '../common/actions';
import Goal from './Goal';
import PlanList from './PlanList';

const PlanBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .planPart {
    width: 512px;
    height: 400px;
    background: lightpink;
    p {
      margin: 0;
      font-size: 1.5rem;
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
        <p>TODAY'S PLAN</p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            style={{ width: '90%' }}
            value={value}
            onChange={onChange}
          />
          <button>입력</button>
        </form>
        <PlanList />
      </div>
      <Goal />
    </PlanBlock>
  );
}

export default Planner;
