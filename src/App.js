import React from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/AddUser/UserList';
import { useState } from 'react';

function App() {
const [userList, setUserList] = useState([]);

const addUserHandler = (uName, uAge) => {
  setUserList((prevUsersList) => {
    return[...prevUsersList, {name: uName, age: uAge ,id: Math.random().toString() }];
  })
}

  return (
    <div>
   <AddUser onAddUser = {addUserHandler}/>
   <UserList users = {userList}/>
    </div>
   
  );
}

export default App;
