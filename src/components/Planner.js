import React from 'react';
import styled from 'styled-components';
import TimeTable from './TimeTable';

const PlanBlock = styled.div`
  height: 400px;
  border: 1px solid black;
  width: 768px;
  margin: 0 auto;
  display: flex;
  .planPart {
    width: 512px;
    background: lightpink;
  }
`;

function Planner() {
  return (
    <PlanBlock>
      <div className="planPart">planner</div>
      <TimeTable />
    </PlanBlock>
  );
}

export default Planner;
