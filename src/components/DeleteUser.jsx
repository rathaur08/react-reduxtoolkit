import React from 'react'
import { clearAllUsers } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const DeleteUser = () => {

  const dispatch = useDispatch();

  const deletesUsers = () => {
    dispatch(clearAllUsers())
  }

  return (
    <>
      <div className='text-end'>
        <button className='btn btn-primary' onClick={deletesUsers}>Clear all users</button>
      </div>
    </>
  )
}

export default DeleteUser