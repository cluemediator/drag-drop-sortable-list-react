import React, { useState } from 'react';
import { arrayMoveImmutable } from 'array-move';
import SortableList from './SortableList';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(prevItem => (arrayMoveImmutable(prevItem, oldIndex, newIndex)));
  };

  return (
    <div className="App">
      <h3>Drag and Drop sortable list in React - <a href="http://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </div>
  );
}

export default App;