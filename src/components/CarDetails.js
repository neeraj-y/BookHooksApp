import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const CarDetails = ({ car }) => {
  const { dispatch } = useContext(CarContext);

  return(
    <li onClick={() => dispatch({type: 'REMOVE_CAR', id: car.id})}>
      <div>{car.make}</div>
      <div>{car.name}</div>
    </li>
  )
}

export default CarDetails;
