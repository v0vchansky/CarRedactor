// angular
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

// models
import { Car, Cars } from '../../models/car.model';

// actions
import { DeleteCar } from 'app/actions/cars.action';
import { AppState } from '../../redux/app.state';

@Component({
    selector: 'cars-list',
    templateUrl: './cars-list.template.html',
    styleUrls: []
})
export class CarsListComponent implements OnInit{

    id: number;

    public carState: Observable<Cars>;

    constructor(
        private store: Store<AppState>,
    ) {}

    ngOnInit() {
        this.carState = this.store.select('carPage');
    }

    updateCarsListDelete(car: Car) {
        this.store.dispatch(new DeleteCar(car));
    }
}