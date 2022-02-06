import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; 

const Form = () => {
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const dispatch = useDispatch();

  const storeUser = (e) =>{
    e.preventDefault();
    console.log(name, address);
    dispatch({type: 'ADD_USER', payload: {id: uuidv4(), name, address}})
    setName('');
    setAddress('');
  }
  return (
      <div>
          <form onSubmit={storeUser}>
              <div className='group'>
                  <input className='control' type="text" value={name} 
                  onChange={(e)=> setName(e.target.value)} placeholder='Enter Your Name' required />
              </div>
              <div className='group'>
                <input className='control' type="text" value={address}
                onChange={(e) => setAddress(e.target.value)} placeholder='Enter Your Address' required />
              </div>
              <div className='group'>
                <input className='btn btn-default' type="submit" value="Add User" />
              </div>
          </form>
      </div>
  );
};

export default Form;
