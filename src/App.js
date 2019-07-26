import React from 'react';
import CarContextProvider from './contexts/CarContext';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import AddCar from './components/AddCar';

function App() {
  return (
    <div className="container">
      <CarContextProvider>
        <Navbar />
        <CarList />
        <AddCar />
      </CarContextProvider>
    </div>
  );
}

export default App;
