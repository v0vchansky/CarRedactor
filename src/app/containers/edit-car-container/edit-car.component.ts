import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/car.model';
import {ActivatedRoute} from '@angular/router';
import {EditCar} from '../../redux/cars.action';
import {AppState} from '../../redux/app.state';
import {Store} from '@ngrx/store';
import {Owner} from '../../models/owner.model';

@Component({
    selector: 'edit-car',
    templateUrl: './edit-car.template.html',
    styleUrls: []
})
export class EditCarComponent implements OnInit {

    cars: Car[] = [];
    car: Car;
    id: number;
    carIdInArray: number;
    inputValidate = '';
    lastId: number;
    carName: string;
    carModel: string;
    carPrice: number;
    carOwners: Owner[] = [];
    isDisabled: any;

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

    ngOnInit() {
        this.carOwners = this.car.carOwners;
        this.carName = this.car.carName;
        this.carModel = this.car.carModel;
        this.carPrice = this.car.carPrice;

        if (this.carOwners.length === 1) {
            this.isDisabled = true;
        }

        this.lastId = this.carOwners[this.carOwners.length - 1].id + 1;
    }

    inputValidator(message: string) {
        this.inputValidate = message;
        setTimeout(() => {
            this.inputValidate = '';
        }, 2000);
    }

/*    addCars() {
        if (this.carName === '' || this.carModel === '') {
            this.inputValidator('Заполните все поля');
            return;
        }

        /!* Action *!/
        this.onAddCar.emit({
            id: this.thisCar.id,
            carName: this.carName,
            carModel: this.carModel,
            carPrice: this.carPrice,
            carOwners: this.carOwners,
        });

        /!* Очищаем поля *!/
        this.carName = '';
        this.carModel = '';
        this.carPrice = 0;

        this.inputValidator('Машина отредактирована');

    }*/

    addOwners() {
        this.isDisabled = false;
        this.carOwners.push(new Owner(this.lastId++));
        console.log(this.lastId++);
    }

    updateOwnersListDelete(updatedOwner: Owner) {
        this.carOwners = this.carOwners.filter(owner => updatedOwner.id !== owner.id);
        if (this.carOwners.length === 1) {
            this.isDisabled = true;
        }
    }

    updateCarsList() {
        this.store.dispatch(new EditCar({
            id: this.id,
            carName: this.carName,
            carModel: this.carModel,
            carPrice: this.carPrice,
            carOwners: this.carOwners,
        }));
    }
}