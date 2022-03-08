import React, { useCallback } from 'react';
import styled from 'styled-components';

const GoalBlock = styled.div`
  height: 104px;
  width: 512px;
  background: lightgrey;
`;

function Goal() {
  return <GoalBlock>This is Goal</GoalBlock>;
}

export default Goal;
