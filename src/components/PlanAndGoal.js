import React from 'react';
import styled from 'styled-components';
import Planner from './Planner';
import TimeTable from './TimeTable';

const WholeBlock = styled.div`
  display: flex;
  width: 768px;
  margin: 0 auto;
`;
function PlanAndGoal({ todos, onRemove, onInsert, onToggle, onSet }) {
  return (
    <WholeBlock>
      <Planner
        todos={todos}
        onRemove={onRemove}
        onInsert={onInsert}
        onToggle={onToggle}
        onSet={onSet}
      />
      <TimeTable />
    </WholeBlock>
  );
}

export default PlanAndGoal;
