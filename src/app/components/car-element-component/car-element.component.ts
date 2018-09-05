import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../models/car.model';

@Component({
    selector: 'car-element',
    templateUrl: './car-element.template.html',
    styleUrls: ['./car-element.styles.css']
})
export class CarElementComponent {
    @Input() carItem: Car;
    @Output() onDeleteCar = new EventEmitter<{id: number, carName: string, carModel: string, carPrice: number}>();

    deleteCar() {
        this.onDeleteCar.emit({
            id: this.carItem.id,
            carName: this.carItem.carName,
            carModel: this.carItem.carModel,
            carPrice: this.carItem.carPrice
        });
    }
}