import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [name, setName] = useState('Change To Descending Order');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const nameChangeHandler = () => {
    if (name == 'Change To Descending Order') {
      setName('Change To Ascending Order');
    } else {
      setName('Change To Descending Order');
    }
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} button={name} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={nameChangeHandler}>{name}</Button>
    </div>
  );
}

export default App;
