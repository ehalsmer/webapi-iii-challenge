import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <span className='nav-span'>
            <Link to='/'>Home</Link>
            <Link to='/allposts/'>All Posts</Link>
            <Link to='/users/'>Users</Link>
        </span>
    )
}

export default Nav;