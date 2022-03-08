import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Goal from './Goal';
import PlanList from './PlanItems';

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

function Planner({ todos, onRemove, onInsert, onToggle }) {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <PlanBlock>
      <div className="planPart">
        <p>TODAY'S PLAN</p>
        <form>
          <input
            type="text"
            style={{ width: '90%' }}
            value={value}
            onChange={onChange}
          />
          <button>입력</button>
        </form>
        <PlanList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </div>
      <Goal />
    </PlanBlock>
  );
}

export default Planner;
