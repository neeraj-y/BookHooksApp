import React, { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import CarDetails from './CarDetails';

const CarList = () => {
  const { cars } = useContext(CarContext);

  return (
    <ul>{cars.map(car => {
      return <CarDetails key={car.id}  car={car} />
    })}</ul>
  )
}

export default CarList;
