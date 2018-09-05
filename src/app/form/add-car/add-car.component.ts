import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../../models/car.model';
import { Owner} from '../../models/owner.model';

//import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  @Input() newCarId: number;
  //@Input() owners: Array<number>;

  inputValidate = '';

  lastId: number = 1;
  carName = '';
  carModel = '';
  carPrice = 0;
  carOwners: Owner[] = [{id: 0, firstName: '', secondName: ''}];
  isDisabled: any;

  @Output() onAddCar = new EventEmitter<Car>();

  constructor() {
    this.isDisabled = true;
    // if (this.owners.length !== 1) {
    //   this.isDisabled = false;
    // } else {
    //   this.isDisabled = true;
    // }
  }

  ngOnInit() {
    //console.log(this.newCarId)
  }

  inputValidator(message: string) {
    this.inputValidate = message;
    setTimeout(() => {
      this.inputValidate = '';
    }, 2000);
  }

  addCars() {
    if (this.carName === '' || this.carModel === '') {
       this.inputValidator('Заполните все поля');
       return;
    }

    //console.log(this.carOwners);

    /* Action */
    this.onAddCar.emit({
      id: this.newCarId,
      carName: this.carName,
      carModel: this.carModel,
      carPrice: this.carPrice,
      carOwners: this.carOwners,
    });

    /* Очищаем поля */
    this.carName = '';
    this.carModel = '';
    this.carPrice = 0;

    this.inputValidator('Машина добавлена');

  }

  addOwners() {
    this.isDisabled = false;
    this.carOwners.push(new Owner(this.lastId++));
  }

  updateOwnersListDelete(updatedOwner: Owner) {
    this.carOwners = this.carOwners.filter(owner => updatedOwner.id !== owner.id);
    if (this.carOwners.length === 1) {
      this.isDisabled = true;
    }
  }
}
