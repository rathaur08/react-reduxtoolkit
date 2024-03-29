import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice'


const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  })
  // console.log(data)

  const deleteUser = (id) =>{
    dispatch(removeUser(id))
  }
  
  return (
    <>
      {
        data.map((user, id) => {
          return (
            <div key={id}>
              <div className='d-flex justify-content-between' key={id}>
                <p>{user}</p>
                <button className='btn btn-danger' onClick={() => deleteUser(id)}>delete</button>
              </div>
              <hr/>
            </div>
          )
        })
      }
    </>
  )
}

export default DisplayUsers