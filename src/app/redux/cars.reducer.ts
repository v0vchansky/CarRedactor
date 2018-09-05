import { CAR_ACTION, CarsAction } from './cars.action';

const data = localStorage.getItem('key1');

const initialState = {
  cars: JSON.parse(data),
};

export function CarsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      state = {
        ...state,
        cars: [...state.cars, action.payload]
      };
      localStorage.setItem('key1', JSON.stringify(state.cars));
      return state;

    case CAR_ACTION.DELETE_CAR:
      let carId = action.payload.id;
      state.cars.forEach(function(item, i, cars) {
        if (item.id === carId) {
          cars.splice(i, 1);
        }
      });
      localStorage.setItem('key1', JSON.stringify(state.cars));
      return state;

    case CAR_ACTION.EDIT_CAR:
      state.cars.forEach((i, item, cars) => {
        if (i.id === action.payload.id) {
          state.cars[item] = action.payload;
        }
      });
      localStorage.setItem('key1', JSON.stringify(state.cars));
      return state;

    default:
      return state;
  }
}
