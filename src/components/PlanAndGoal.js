import React from 'react';
import styled from 'styled-components';
import Planner from './Planner';
import TimeTable from './TimeTable';

const WholeBlock = styled.div`
  display: flex;
  width: 768px;
  margin: 0 auto;
`;
function PlanAndGoal() {
  return (
    <WholeBlock>
      <Planner />
      <TimeTable />
    </WholeBlock>
  );
}

export default PlanAndGoal;
