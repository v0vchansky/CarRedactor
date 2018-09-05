import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Owner} from '../../models/owner.model';
import {Car} from '../../models/car.model';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  @Input() thisCar: Car;
  //@Input() owners: Array<number>;

  inputValidate = '';

  lastId: number;
  carName: string;
  carModel: string;
  carPrice: number;
  carOwners: Owner[] = [];
  isDisabled: any;

  @Output() onAddCar = new EventEmitter<Car>();

  constructor() {}

  ngOnInit() {
    this.carOwners = this.thisCar.carOwners;
    this.carName = this.thisCar.carName;
    this.carModel = this.thisCar.carModel;
    this.carPrice = this.thisCar.carPrice;

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

  addCars() {
    if (this.carName === '' || this.carModel === '') {
      this.inputValidator('Заполните все поля');
      return;
    }

    /* Action */
    this.onAddCar.emit({
      id: this.thisCar.id,
      carName: this.carName,
      carModel: this.carModel,
      carPrice: this.carPrice,
      carOwners: this.carOwners,
    });

    /* Очищаем поля */
    this.carName = '';
    this.carModel = '';
    this.carPrice = 0;

    this.inputValidator('Машина отредактирована');

  }

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

}
