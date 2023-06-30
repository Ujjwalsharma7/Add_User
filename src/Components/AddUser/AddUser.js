import React from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState,useRef } from 'react';
import ErrorModal  from '../UI/ErrorModal';

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

   
    const [error, setError] = useState('');
    const submitHandler = (event) => {
       event.preventDefault();
       const enteredName = nameInputRef.current.value;
       const enteredUserAge = ageInputRef.current.value;
       if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
       setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age(non-empty values)'
       })
       return;
       }
       if(+enteredUserAge < 1){
       setError({
        title:'Invalid age',
        message:'Please enter valid age (>0)'
       })
       return;
       }
       props.onAddUser(enteredName, enteredUserAge);
       nameInputRef.current.value = '';
       ageInputRef.current.value = '';
    }

   
    const errorHandler = () => {
      setError('');
    }
  return (
    <React.Fragment>
      {error && (<ErrorModal title = {error.title} message={error.message} onConfirm={errorHandler}/>)}
    <Card className={classes.input}>
   <form onSubmit={submitHandler} className='form'>
    <label htmlFor='Username'>Username</label>
    <input type='text' id='name' placeholder='name'  ref={nameInputRef}></input>
    <label htmlFor='age'>Age (In years)</label>
    <input type='number' id='age' placeholder='age' ref={ageInputRef}></input>
    <Button type='submit'>
      Add User
    </Button>
   </form>
    </Card>
    </React.Fragment>
  )
}

export default AddUser
