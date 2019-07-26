import uuid from 'uuid/v1';

const carReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CAR':
      return [...state, {
        make: action.car.make,
        name: action.car.name,
        id: uuid()
      }];
    case 'REMOVE_CAR':
      return state.filter(car => car.id !== action.id);
    default:
      return state;
  }
}

export default carReducer;
