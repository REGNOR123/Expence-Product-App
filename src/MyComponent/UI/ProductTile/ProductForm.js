// import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = (props) => {

    // First basic approach to updating the state to multiple user input fields(by creating saprate state and seprate method)

    const [itemTitle, setItemTitle] = useState('');                
    const [itemAmount, setItemAmount] = useState('');
    const [itemDate, setItemDate] = useState('');

    const titleListner = (event) =>{
        setItemTitle(event.target.value);
    };
    const amountListner = (event) =>{
        setItemAmount(event.target.value);
    };
    const dateListner = (event) =>{
        setItemDate(event.target.value);
    };

    // Second  approach to updating the state to multiple user input fields(by creating a single state and multiple function)
    // const [userInput, setUserInput] = useState({ itemTitle: '', itemAmount: '', itemDate: '' });

    // const titleListner = (event) => {
    //     setUserInput({ ...userInput, itemTitle: event.target.value });
    // };
    // const amountListner = (event) => {
    //     setUserInput({ ...userInput, itemAmount: event.target.value });
    // };
    // const dateListner = (event) => {
    //     setUserInput({ ...userInput, itemDate: event.target.value });
    // };

    // Third approach to updating the state to multiple user input fields(by creating single state and single function)

    // const [userInput, setUserInput] = useState({ itemTitle: '', itemAmount: '', itemDate: '' });
    // const eventListner = (event) => {
    //     // setUserInput({itemTitle: event.target.value});
    //     if (event.target.name === 'title')
    //         setUserInput({ ...userInput, itemTitle: event.target.value });
    //     else if (event.target.name === 'amount')
    //         setUserInput({ ...userInput, itemAmount: event.target.value });
    //     else if (event.target.name === 'date')
    //         setUserInput({ ...userInput, itemDate: event.target.value });
    // };
    // const formSubmitHandler = (event) => {
    //     event.preventDefault(); {/* by default on submit the form bydefault browser submit a request to server which hosting the web page  */ }
    //     const expenceItemData = {
    //         itemTitle: userInput.itemTitle,
    //         itemAmount: userInput.itemAmount,
    //         itemDate: new Date(userInput.itemDate)
    //     }
    //     console.log(expenceItemData);
    //     setUserInput({
    //         itemTitle: '',
    //         itemAmount: '',
    //         itemDate: ''
    //     })
    // }
    const formSubmitHandler = (event) => {
        event.preventDefault(); {/* by default on submit the form bydefault browser submit a request to server which hosting the web page  */ }
        const expenceItemData = {
            Title: itemTitle,
            Price: itemAmount,
            Date: new Date(itemDate)
        }
        props.onSaveProductFormData(expenceItemData);

        console.log(expenceItemData);
        setItemTitle('')
        setItemAmount('')
        setItemDate('')
    }


    return (

        <>
            <form onSubmit={formSubmitHandler}>    {/* here, onsubmit will return all the form input elements value*/}
                <div className='productBox'>
                    <div className='productdetails'>
                        <label>Title</label>
                        {/* <input variant="outlined" value={userInput.itemTitle} name='title' type='text' size='small' label="Enter Title" onChange={titleListner} /> */}
                        <input 
                        // variant="outlined" 
                        value={itemTitle} 
                        name='title' 
                        type='text' 
                        size='small' 
                        label="Enter Title" 
                        onChange={titleListner} 
                        />
                    </div>
                    <div className='productdetails'>
                        <label>Amount</label>
                        {/* <input variant="outlined" value={userInput.itemAmount} name='amount' type='number' size='small' label="Enter Amount" onChange={amountListner} /> */}
                        <input variant="outlined" value={itemAmount} name='amount' type='number' size='small' label="Enter Amount" onChange={amountListner} />
                    </div>
                    <div className='productdetails'>
                        <label>Date</label>
                        {/* <input variant="outlined" value={userInput.itemDate} name='date' type='date' size='small' onChange={dateListner} /> */}
                        <input variant="outlined" value={itemDate} name='date' type='date' size='small' onChange={dateListner} />
                    </div>
                    <div>
                        <button variant="outlined" size='small'>Item Expence</button>
                    </div>
                </div>
            </form>
        </>

    )
}
export default ProductForm;