import React from 'react';
import styled from 'styled-components';

const DateAndQuotesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  p {
    margin: 0;
  }
  .today {
    font-size: 1.5rem;
  }
`;

function DateAndQuotes() {
  const year = new Date().getFullYear().toString();
  const month = (new Date().getMonth() + 1).toString();
  const date = new Date().getDate().toString();

  return (
    <DateAndQuotesBlock>
      <p className="today">
        {year}-{month.padStart(2, '0')}-{date.padStart(2, '0')}
      </p>
      <p>Cheer up!</p>
    </DateAndQuotesBlock>
  );
}

export default React.memo(DateAndQuotes);
