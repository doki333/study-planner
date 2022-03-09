import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onRemove, onToggle } from '../common/actions';
import PlanItems from './PlanItems';
import styled from 'styled-components';

const ListBlock = styled.div`
  overflow-y: auto;
  height: 332px;
  padding-bottom: 0.4rem;
`;
function PlanList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ListBlock>
      {todos.map((todo) => (
        <PlanItems
          key={todo.id}
          todo={todo}
          onToggle={() => {
            dispatch(onToggle(todo.id));
          }}
          onRemove={() => {
            dispatch(onRemove(todo.id));
          }}
        />
      ))}
    </ListBlock>
  );
}

export default React.memo(PlanList);
