import React from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/AddUser/UserList';
import UserList from './Components/AddUser/UserList';

function App() {
  return (
    <div>
   <AddUser />
   <UserList users = {[]}/>
    </div>
   
  );
}

export default App;
