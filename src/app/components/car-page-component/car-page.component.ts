// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

// models
import { Car, Cars } from '../../models/car.model';

@Component({
    selector: 'car-page',
    templateUrl: './car-page.template.html',
    styleUrls: []
})
export class CarPageComponent implements OnInit {

    cars: Car[] = [];
    car: Car;
    id: number;

    constructor(
        private route: ActivatedRoute,
        private store: Store<Cars>
    ) {
        this.id = +this.route.snapshot.params['id'];
    }

    ngOnInit() {

        this.store.select('carPage').subscribe(({cars}) => {
            this.car = cars.filter(car => car.id === this.id)[0]
        });
    }

}