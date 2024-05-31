import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { purple,lightBlue,indigo,deepPurple} from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
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
                <table>
                <tr>
                    <th>Expense no:</th>
                    <th> Description:</th>
                    <th>Expense:</th>
                    <th>Date:</th>
                    <th>REMOVE</th>
                </tr>
                {items.length > 0 &&
                items.map((item, index) => (
                    <tr>
                        <td>{!item.item?'':item.item}</td>
                        <td>{!item.desc?'':item.desc}</td>
                        <td>{!item.number?'':item.number}</td>
                        <td>{item.date?item.date:''}</td>
                        <td className='buttonpart'>
                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(item)}>
                            Delete
                        </Button>
                        </td>
                    </tr>
                ))}
                </table>
            </div>
        </div>
    );
};

export default Input;