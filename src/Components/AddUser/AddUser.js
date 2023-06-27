import React from 'react'
import classes from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button';
function AddUser() {
    const submitHandler = (event) => {
       event.preventDefault();
    }
  return (
    <Card className={classes.input}>

   <form onSubmit={submitHandler} className='form'>
    <label htmlFor='Username'>Username</label>
    <input type='text' id='name' placeholder='name'></input>
    <label htmlFor='age'>Age (In years)</label>
    <input type='number' id='age' placeholder='age'></input>
    <Button type='submit'>
      Add User
    </Button>
   </form>
    </Card>
  )
}

export default AddUser
