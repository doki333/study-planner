import React from 'react';

function PlanItems({ todo, onToggle }) {
  return <div>{todo.text}</div>;
}

export default React.memo(PlanItems);
