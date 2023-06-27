import React from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';
import ErrorModal  from '../UI/ErrorModal';

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');
    const submitHandler = (event) => {
       event.preventDefault();
       if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
       setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age(non-empty values)'
       })
       return;
       }
       if(+enteredAge < 1){
       setError({
        title:'Invalid age',
        message:'Please enter valid age (>0)'
       })
       return;
       }
       props.onAddUser(enteredUsername, enteredAge);
       setEnteredAge('');
       setEnteredUsername('');
    }

    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value)
    }
  return (
    <div>
      {error && <ErrorModal title = {error.title} message={error.message}/>}
    <Card className={classes.input}>
   <form onSubmit={submitHandler} className='form'>
    <label htmlFor='Username'>Username</label>
    <input type='text' id='name' placeholder='name' onChange={usernameChangeHandler} value={enteredUsername}></input>
    <label htmlFor='age'>Age (In years)</label>
    <input type='number' id='age' placeholder='age' onChange={ageChangeHandler} value={enteredAge}></input>
    <Button type='submit'>
      Add User
    </Button>
   </form>
    </Card>
    </div>
  )
}

export default AddUser
