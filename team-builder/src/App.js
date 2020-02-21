import React from 'react';
import './App.css';
import {useState} from 'react';
import Form from './components/Form';
import TeamList from './components/TeamList';

function App() {

  const [members, setMembers] = useState([]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMember]);
  };

  return (
    <div className='Main'>
      <h1>Member List</h1>
      <Form addNewMember={addNewMember} />
      <TeamList members={members}/>
    </div>
  );
}

export default App;
