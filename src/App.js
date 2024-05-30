import './App.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Input from './Components/Input.jsx';
import ExpensesList from './Components/ExpensesList.jsx';
import theme from './Components/Theme.js';
import { ThemeProvider,CssBaseline } from '@mui/material';
function App() {
  console.log(localStorage);
  const storeditem = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(storeditem||[]);
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      <Input items={items} setItems={setItems}/>
      <ExpensesList items={items}/>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;