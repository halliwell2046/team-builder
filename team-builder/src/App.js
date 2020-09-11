import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import FormList from './Components/FormList';


import './App.css';

function App() {
  const [members, setMembers] = useState([{
    memberName: 'Alice Frazier',
    email: 'halliwell2046@yahoo.com',
    role: 'Junior Dev'
  }])

  console.log(members);

  return (
    <div className="App">
      <h1>Add Team Member</h1>
      <Form members={members} setMembers={setMembers} />
      <FormList members={members} />
   
    </div>
  );
}

export default App;
