import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const Navbar = () => {
  const { cars } = useContext(CarContext);

  return (
    <div className='header'>
      <h1>Car Store</h1>
      <p>There are {cars.length} car available for sale today.</p>
    </div>
  )
}

export default Navbar;
