import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onToggle } from '../common/actions';
import PlanItems from './PlanItems';

function PlanList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <PlanItems
          key={todo.id}
          todo={todo}
          onToggle={() => {
            dispatch(onToggle(todo.id));
          }}
        />
      ))}
    </div>
  );
}

export default React.memo(PlanList);
