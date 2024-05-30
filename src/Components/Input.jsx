import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { purple,lightBlue,indigo,deepPurple} from '@mui/material/colors';
import theme from './Theme';
const purpleColor = purple[200];


const Input = ({ items, setItems }) => {
    const [inputVal, setInput] = useState('');
    const [descVal, setDesc] = useState('');
    const [numberVal, setNumber] = useState('');
    const [dateVal, setDate] = useState('');
    const [text,nexttext] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
        item: inputVal,
        desc: descVal,
        number: numberVal,
        date: dateVal
        };
        setItems([...items, newItem]);
        setInput('');
        setDesc('');
        setNumber('');
        setDate('');
    };

    const handleDelete = (itemToDelete) => {
        setItems(items.filter((item) => item !== itemToDelete));
    };

    /*const changer=(event)=>
    {
        console.log("changer");
        nexttext(event.target.value);
        setInput(event.target.value);
    }*/
    return (
        <div className='first-instance'>
            <form onSubmit={handleSubmit}>
                <div className='inputcontainer'>
                <p style={{color:'#90caf9'}}>EXPENSE CALCULATOR</p>
                <input
                type="text"
                placeholder="Expense no."
                value={inputVal}
                onChange={(e) => setInput(e.target.value)}
                />
                <input
                type="text"
                placeholder="Description"
                value={descVal}
                onChange={(e) => setDesc(e.target.value)}
                />
                <input
                type="number"
                placeholder="Expense amount"
                value={numberVal}
                onChange={(e) => setNumber(e.target.value)}
                />
                <input
                type="date"
                value={dateVal}
                onChange={(e) => setDate(e.target.value)}
                />
                <Button size="large" type='submit' variant='outlined' color='success'>Add Expense</Button>
                </div>
            </form>
            <div className="item-list-container">
                <p>EXPENSE LIST:</p>
                {items.length > 0 &&
                items.map((item, index) => (
                    <div className="item">
                        <div className='itemdesc' key={index}>
                            <p>expense no.:{item.item}; Description:{item.desc}; Expense:{item.number}; Date:{item.date}</p>
                        </div>
                        <div className='button'>
                            <button onClick={() => handleDelete(item)}>X</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Input;