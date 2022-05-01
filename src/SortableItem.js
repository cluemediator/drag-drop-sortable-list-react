import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

const SortableItem = (props) => {
  return <li>{props.value}</li>
}

export default SortableElement(SortableItem);