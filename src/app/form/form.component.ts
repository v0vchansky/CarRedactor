import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Car, Cars} from '../models/car.model';
import {AppState} from '../redux/app.state';
import {AddCar} from '../redux/cars.action';
import {Observable} from 'rxjs/internal/Observable';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  cars: Car[] = [];
  id: number;

  public carState: Observable<Cars>

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('carPage').subscribe(({cars}) => {
      this.cars = cars;
    })
    this.id = (this.cars.length === 0) ? 1 : this.cars[this.cars.length - 1].id + 1;
    console.log(this.id)
  }

  ngOnInit() {
    this.carState = this.store.select(state => state.carPage);
  }

  updateCarsList(car: Car) {
    this.id++;
    this.store.dispatch(new AddCar(car))
  }

}
