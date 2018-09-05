import {Owner} from './owner.model';

export class Car {
  id: number;
  carName: string;
  carModel: string;
  carPrice: number;
  carOwners: Owner[];
}

export interface Cars {
  cars: Car[];
}
