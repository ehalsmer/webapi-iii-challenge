import React, { useEffect, useState } from 'react';
import { Accordion } from 'semantic-ui-react';
import axios from 'axios';

const UserAccord = (props) => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
      axios
        .get(`https://ehalsmer-blog.herokuapp.com/users/${props.user.id}/posts`)
        .then(response => {
          console.log(response);
          setUserPosts(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    return (
        <Accordion>
        <Accordion.Title>{props.user.name}</Accordion.Title>
        <Accordion.Content>
            {userPosts.map((post)=><p>{post.text}</p>)}
        </Accordion.Content>
        </Accordion>
        // <div>{props.user.name}</div>
    )
}

export default UserAccord;