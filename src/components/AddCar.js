import React, { useContext, useState } from 'react';
import { CarContext } from '../contexts/CarContext';

const AddCar = () => {
  const [make, setMake] = useState('');
  const [name, setName] = useState('');
  const { dispatch } = useContext(CarContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:'ADD_CAR', car: {make, name}});
    setMake('');
    setName('');
  }

  return (
      <form onSubmit={handleSubmit}>
        <input type='text' value={make} placeholder='Add make' onChange={(e) => setMake(e.target.value)} required />
        <input type='text' value={name} placeholder='Add name' onChange={(e) => setName(e.target.value)} required />
        <input type='submit' value='Add Car' />
      </form>
  )
}

export default AddCar;
