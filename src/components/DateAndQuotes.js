import React from 'react';
import styled from 'styled-components';

const DateAndQuotesBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  .quotes {
    margin: 0;
    color: blue;
    font-size: 1.1rem;
  }
  .today {
    margin: 0;
    font-size: 1.5rem;
  }
`;

function DateAndQuotes({ quotes }) {
  const year = new Date().getFullYear().toString();
  const month = (new Date().getMonth() + 1).toString();
  const date = new Date().getDate().toString();

  return (
    <DateAndQuotesBlock>
      <p className="today">
        {year}-{month.padStart(2, '0')}-{date.padStart(2, '0')}
      </p>
      <p className="quotes">{quotes.text}</p>
    </DateAndQuotesBlock>
  );
}

export default React.memo(DateAndQuotes);
