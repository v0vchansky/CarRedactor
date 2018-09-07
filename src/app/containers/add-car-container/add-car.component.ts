// angular
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Store} from '@ngrx/store';

// models
import {Car, Cars} from '../../models/car.model';

//
import {AppState} from '../../redux/app.state';
import {AddCar} from '../../redux/cars.action';
import {Owner} from '../../models/owner.model';
import {CarInfo} from '../../models/carInfo.model';

@Component({
    selector: 'add-car-container',
    templateUrl: './add-car.template.html',
    styleUrls: []
})
export class AddCarComponent implements OnInit{

    cars: Car[] = [];
    id: number;
    inputValidate = '';
    lastId: number = 1;
    carName = '';
    carModel = '';
    carPrice = 0;
    carOwners: Owner[] = [{id: 0, firstName: '', secondName: ''}];
    isDisabled: any;

    public carState: Observable<Cars>;

    constructor(
        private store: Store<AppState>
    ) {
        this.store.select('carPage').subscribe(({cars}) => {
            this.cars = cars;
        });
        this.id = (this.cars.length === 0) ? 1 : this.cars[this.cars.length - 1].id + 1;
        this.isDisabled = true;
    }

    ngOnInit() {
        this.carState = this.store.select(state => state.carPage);
    }

    addCar() {
        this.store.dispatch(new AddCar({
            id: this.id,
            carName: this.carName,
            carModel: this.carModel,
            carPrice: this.carPrice,
            carOwners: this.carOwners,
        }))
    }

    addOwners() {
        this.isDisabled = false;
        this.carOwners.push(new Owner(this.lastId++));
    }

    getCarInfo(carInfo: CarInfo) {
        this.carName = carInfo.carName;
        this.carModel = carInfo.carModel;
        this.carPrice = carInfo.carPrice;
    }

    updateOwnersListDelete(updatedOwner: Owner) {
        this.carOwners = this.carOwners.filter(owner => updatedOwner.id !== owner.id);
        if (this.carOwners.length === 1) {
            this.isDisabled = true;
        }
    }
}