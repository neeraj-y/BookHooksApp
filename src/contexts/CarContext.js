import React, { createContext, useReducer } from 'react';
import carReducer from '../reducers/CarReducer';

export const CarContext = createContext();

const CarContextProvider = (props) => {
  const [cars, dispatch] = useReducer(carReducer, [
    { make: 'Honda', name: 'Jazz', id: 1 }
  ]);

  return(
    <CarContext.Provider value={{ cars, dispatch }}>
      { props.children }
    </CarContext.Provider>
  )
}

export default CarContextProvider;
