// angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { CarInfo } from '../../models/carInfo.model';

@Component({
    selector: 'car-form',
    templateUrl: './car-form.template.html',
    styleUrls: []
})

export class CarFormComponent {

    @Input() carName: string;
    @Input() carModel: string;
    @Input() carPrice: number;

    @Output() onEmmit = new EventEmitter<CarInfo>();

    constructor() {}

    onTab() {
        this.onEmmit.emit({
            carName: this.carName,
            carModel: this.carModel,
            carPrice: this.carPrice
        })
    }
}