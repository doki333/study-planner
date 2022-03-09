import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

const TimeTableZone = styled.div`
  width: 256px;
  border-left: 1px solid black;
  table {
    background: #e7f7fa;
    tr {
      color: #03045e;
      font-weight: 600;
    }
    td {
      background: transparent;
      &:not(:nth-child(1)) {
        cursor: pointer;
        border: 1px solid black;
        width: 33px;
        height: 5px;
      }
    }
  }
`;

const setData = () => {
  const empty = [];
  for (let i = 6; i <= 24; i++) {
    const newObject = {
      col1: `${i}`,
      col2: '',
      col3: '',
      col4: '',
      col5: '',
      col6: '',
      col7: '',
    };
    empty.push(newObject);
  }
  return empty;
};

function TimeTable() {
  const blue = '#90DBE8';
  const [start, setStart] = useState(false);
  const onClick = useCallback(
    (e) => {
      setStart(!start);
      e.target.style.background = `${blue}`;
    },
    [start],
  );

  const onHover = useCallback(
    (e) => {
      if (
        start &&
        !e.target.innerText &&
        e.target.style.background !== `${blue}`
      ) {
        e.target.style.background = `${blue}`;
        e.target.attributes.indexvalue.value = '1';
      } else {
        return;
      }
    },
    [start],
  );

  const onDoubleClick = (e) => {
    const num = e.target.attributes.indexvalue.value;
    if (num === '0') {
      e.target.style.background = `linear-gradient(to right, ${blue} 50%, transparent 50%)`;
      e.target.attributes.indexvalue.value = '-0.5';
    } else if (num === '-0.5') {
      e.target.style.background = `linear-gradient(to left, ${blue} 50%, transparent 50%)`;
      e.target.attributes.indexvalue.value = '0.5';
    } else if (num === '0.5') {
      e.target.style.background = `${blue}`;
      e.target.attributes.indexvalue.value = '1';
    } else if (num === '1') {
      e.target.style.background = `linear-gradient(to right, ${blue} 50%, transparent 50%)`;
      e.target.attributes.indexvalue.value = '-0.5';
    }
  };
  const onContextClick = (e) => {
    e.preventDefault();
    e.target.style.background = 'transparent';
    e.target.attributes.indexvalue.value = '0';
  };
  const data = React.useMemo(() => [...setData()], []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Time',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: '10',
        accessor: 'col2',
      },
      {
        Header: '20',
        accessor: 'col3',
      },
      {
        Header: '30',
        accessor: 'col4',
      },
      {
        Header: '40',
        accessor: 'col5',
      },
      {
        Header: '50',
        accessor: 'col6',
      },
      {
        Header: '60',
        accessor: 'col7',
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <TimeTableZone>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      indexvalue={0}
                      onMouseEnter={onHover}
                      onClick={onClick}
                      onContextMenu={onContextClick}
                      onDoubleClick={onDoubleClick}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TimeTableZone>
  );
}

export default TimeTable;
