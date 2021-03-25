import React, { useReducer } from 'react';
import { UserContext } from './UserContext';
import UserReducer from './UserReducer';
import axios from 'axios';

export default function UserState(props) {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  //   const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const uri = 'https://reqres.in/api/users';

  const getUsers = async () => {
    const res = await axios.get(uri);
    dispatch({
      type: 'GET_USERS',
      payload: res.data.data,
    });
  };

  const getProfile = async (id) => {
    const res = await axios.get(`${uri}/${id}`);
    dispatch({
      type: 'GET_PROFILE',
      payload: res.data.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
