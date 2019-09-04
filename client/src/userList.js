import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8001/users')
        .then(response => {
            console.log(response)
            setUsers(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return(
        <div>
            <h1>User List</h1>
            {users.map((user) => <div>{user.name}</div>)}
        </div>
    )
}

export default UserList;