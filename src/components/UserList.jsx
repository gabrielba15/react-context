import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/User/UserContext';

const UserList = () => {
  /* search doc */
  const { users, getUsers, getProfile } = useContext(UserContext);

  /* search doc */
  useEffect(() => {
    /** -> se ejecuta antes del render */
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          href="#"
          key={user.id}
          className="list-group-item list-group-item-action d-flex flex-row justified-content-start"
          onClick={() => getProfile(user.id)}
        >
          <img
            src={user.avatar}
            className="img-fluid mr-4 rounded-circle"
            width="70"
          />
          <p>{`${user.first_name} ${user.last_name}`}</p>
        </a>
      ))}
    </div>
  );
};

export default UserList;
