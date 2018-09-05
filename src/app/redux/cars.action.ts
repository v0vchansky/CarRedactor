import {Action} from '@ngrx/store';
import {Car} from '../models/car.model';

export namespace CAR_ACTION {
  export const ADD_CAR = 'ADD_CAR'
  export const DELETE_CAR = 'DELETE_CAR'
  export const EDIT_CAR = 'EDIT_CAR'
}

export class AddCar implements Action{
  readonly type = CAR_ACTION.ADD_CAR

  constructor(public payload: Car) {}
}

export class DeleteCar implements  Action {
  readonly type = CAR_ACTION.DELETE_CAR

  constructor(public payload: Car) {}
}

export class EditCar implements Action {
  readonly type = CAR_ACTION.EDIT_CAR

  constructor(public payload: Car) {}
}

export type CarsAction = AddCar
                        | EditCar
                        | DeleteCar;
