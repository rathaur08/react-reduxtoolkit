import React from 'react'
import DeleteUser from './DeleteUser';
import DisplayUsers from './DisplayUsers';
import "./userdetails.css";
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';

addUser


const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload)
    dispatch(addUser(payload));
  };

  return (
    <>
      <div className='p-2 max-width-con'>
        <h1 className='text-center mb-5'>Vite + React Redux Toolkit</h1>
        <div className='d-flex justify-content-between'>
          <h2>UserDetails</h2>
          <button className='btn btn-primary' onClick={() => addNewUser(fakeUserData())}>Add new users</button>
        </div>
        <hr />
        <DisplayUsers/>
        <DeleteUser />
      </div>
    </>
  )
}

export default UserDetails