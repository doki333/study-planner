import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import DateAndQuotes from './DateAndQuotes';
import { BiStopwatch } from 'react-icons/bi';

const WatchTopBlock = styled.div`
  width: 768px;
  height: 130px;
  background: #90e0ef;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 3rem;
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

const BtnsBlock = styled.div`
  button {
    &:nth-child(1) {
      border-top-left-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;
    }
    &:nth-child(3) {
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
    }
    font-size: 0.9rem;
    font-weight: 600;
    &:active {
      background: #03045e;
      color: white;
    }
  }
`;

const StopWatchPart = styled.div`
  display: flex;
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  p {
    margin: 0;
    svg {
      font-size: 2.5rem;
    }
  }
  span {
    font-size: 2.5rem;
  }
`;

function StopWatch() {
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
      <DateAndQuotes />

      <WatchBottomBlock>
        <StopWatchPart>
          <p>
            <BiStopwatch />
          </p>
          <span>
            {('0' + Math.floor((time / 3600000) % 24)).slice(-2)} :
            {('0' + Math.floor((time / 60000) % 60)).slice(-2)} :
            {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
          </span>
        </StopWatchPart>
        <BtnsBlock>
          <button onClick={onClickStart}>START</button>
          <button onClick={onClickPause}>PAUSE</button>
          <button onClick={onReset}>RESET</button>
        </BtnsBlock>
      </WatchBottomBlock>
    </WatchTopBlock>
  );
}

export default StopWatch;
