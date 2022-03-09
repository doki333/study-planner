import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styled from 'styled-components';

const ItemBlock = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.5;
  padding-top: 0.3rem;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #3e6a81;

  &:nth-child(2n) {
    background: #e7f7fa;
  }

  p {
    flex: 1;
    margin: 0;
    font-size: 1rem;
    margin-left: 0.5rem;
  }

  .checkbox {
    color: #03045e;

    line-height: 1rem;
    svg {
      cursor: pointer;
      font-size: 1.3rem;
    }
  }

  .checked {
    color: #a1c0d0;
    font-size: 1rem;
    text-decoration: line-through;
    line-height: 1rem;
    svg {
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
`;

const RemoveBlock = styled.div`
  font-size: 1.3rem;
  color: red;
  cursor: pointer;
  padding-right: 1rem;
`;

function PlanItems({ todo, onToggle, onRemove }) {
  const { text, checked } = todo;
  return (
    <ItemBlock>
      <div onClick={onToggle} className={checked ? 'checked' : 'checkbox'}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      <p className={checked ? 'checked' : 'checkbox'}>{text}</p>
      <RemoveBlock onClick={onRemove}>
        <MdRemoveCircleOutline />
      </RemoveBlock>
    </ItemBlock>
  );
}

export default React.memo(PlanItems);
