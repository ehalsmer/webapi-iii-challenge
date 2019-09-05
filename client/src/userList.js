import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion } from "semantic-ui-react";
import UserAccord from './userAccord';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ehalsmer-blog.herokuapp.com/users")
      .then(response => {
        console.log(response);
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>User List</h1>
      <Accordion>
        {users.map(user => (
          <UserAccord user={user}/> 
        ))}
      </Accordion>
    </>
  );
};

export default UserList;
