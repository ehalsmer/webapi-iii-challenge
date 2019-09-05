import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

const Nav = () => {
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
    <Menu>
      <Menu.Item as={Link} to={"/"}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to={"/allposts"}>
        All Posts
      </Menu.Item>
      {/* <Menu.Item>Users</Menu.Item> */}
      <Dropdown item text="Users">
        <Dropdown.Menu>
            {users.map((user)=><Menu.Item>{user.name}</Menu.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};

export default Nav;
