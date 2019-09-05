import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Nav = () => {
    return (
        <Menu>
            <Menu.Item as={Link} to={'/'}>Home</Menu.Item>
            <Menu.Item as={Link} to={'/allposts'}>All Posts</Menu.Item>
            <Menu.Item as={Link} to={'/users'}>Users</Menu.Item>
        </Menu>
    )
}

export default Nav;