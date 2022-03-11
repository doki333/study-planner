import React, { useCallback } from 'react';
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
  const toggle = useCallback(
    (id) => {
      dispatch(onToggle(id));
    },
    [dispatch],
  );
  const remove = useCallback(
    (id) => {
      dispatch(onRemove(id));
    },
    [dispatch],
  );
  return (
    <ListBlock>
      {todos.map((todo) => (
        <PlanItems
          key={todo.id}
          todo={todo}
          onToggle={() => {
            toggle(todo.id);
          }}
          onRemove={() => {
            remove(todo.id);
          }}
        />
      ))}
    </ListBlock>
  );
}

export default React.memo(PlanList);
