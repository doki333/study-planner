import React from 'react';
import styled from 'styled-components';

const GoalBlock = styled.div`
  height: 100px;
  border: 1px solid black;
  width: 768px;
  margin: 0 auto;
  background: lightgrey;
`;

function Goal() {
  return <GoalBlock>This is Goal</GoalBlock>;
}

export default Goal;
