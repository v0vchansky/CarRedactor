import { Component, OnInit } from '@angular/core';
import {Car} from '../models/car.model';
import {ActivatedRoute} from '@angular/router';
import {DeleteCar, EditCar} from '../redux/cars.action';
import {AppState} from '../redux/app.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent{

  cars: Car[] = [];
  car: Car;
  id: number;
  carIdInArray: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.id = +this.route.snapshot.params['id'];

    this.store.select('carPage').subscribe(({cars}) => {
      this.car = cars.filter(car => car.id === this.id)[0]
    });

    this.cars.forEach((i, item, cars) => {
      if (i.id === this.id) {
        this.car = i;
        this.carIdInArray = item;
      }
    });
  }

  updateCarsList(car: Car) {
    this.store.dispatch(new EditCar(car));
  }
}
