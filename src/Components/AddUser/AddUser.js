import React from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from 'react';

function AddUser() {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const submitHandler = (event) => {
       event.preventDefault();
       if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        return;
       }
       if(+enteredAge < 1){
        return;
       }
      console.log(enteredAge , enteredUsername)
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
  )
}

export default AddUser
