import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import DateAndQuotes from './DateAndQuotes';

const WatchTopBlock = styled.div`
  width: 768px;
  height: 130px;
  background: beige;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 5rem;
`;

const WatchBottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  button {
    background: white;
    padding: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

const StopWatchPart = styled.div`
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  span {
    font-size: 2.5rem;
  }
`;

function StopWatch({ quotes }) {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const onClickStart = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
  }, []);

  const onClickPause = useCallback(() => {
    setIsActive(false);
    setIsPaused(true);
  }, []);
  const onReset = useCallback(() => {
    setIsActive(false);
    setIsPaused(true);
    setTime(0);
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  return (
    <WatchTopBlock>
      <DateAndQuotes quotes={quotes} />

      <WatchBottomBlock>
        <StopWatchPart>
          <span>
            TOTAL TIME IS...
            {('0' + Math.floor((time / 3600000) % 24)).slice(-2)}
          </span>{' '}
          :<span> {('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span> :
          <span> {('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
        </StopWatchPart>
        <div>
          <button onClick={onClickStart}>시작</button>
          <button onClick={onClickPause}>멈춤</button>
          <button onClick={onReset}>RESET</button>
        </div>
      </WatchBottomBlock>
    </WatchTopBlock>
  );
}

export default StopWatch;
