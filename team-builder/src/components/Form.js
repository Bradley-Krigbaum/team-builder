import React, { useState } from "react";

const ListForm = props => {
  const [members, setMembers] = useState({
    id: "",
    name: "",
    email: "",
    role: ""
  });

  console.log(props)
  
  const handleChanges = event => {
    // console.log("event", event.target.value);
    
    setMembers({ ...members, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(members);
    setMembers({ name: "", email: "", role: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder={'Member Name'}
        id="name"
        name="name"
        value={members.name}
        onChange={handleChanges}
      />


      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="What is your Email?"
        id="email"
        name="email"
        value={members.email}
        onChange={handleChanges}
      />


      <label htmlFor="role">Role</label>
      <input
        id="role"
        name="role"
        placeholder="What Position Are You?"
        value={members.role}
        onChange={handleChanges}
      />

      <button type="submit">Add Player</button>
    </form>
  );
};

export default ListForm;
