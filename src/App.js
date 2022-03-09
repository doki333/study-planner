import './App.css';
import StopWatch from './components/StopWatch';
import PlanAndGoal from './components/PlanAndGoal';
import styled from 'styled-components';

const AppBlock = styled.div`
  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
function App() {
  return (
    <AppBlock>
      <StopWatch />
      <PlanAndGoal />
    </AppBlock>
  );
}

export default App;
