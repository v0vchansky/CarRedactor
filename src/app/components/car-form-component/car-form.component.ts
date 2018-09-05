// angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { Car } from '../../models/car.model';

@Component({
    selector: 'car-form',
    templateUrl: './car-form.template.html',
    styleUrls: []
})

export class CarFormComponent {

    @Input() carName: string;
    @Input() carModel: string;
    @Input() carPrice: number;

    @Output() onEmmit = new EventEmitter<{}>();

    constructor() {}

    onSave() {

    }
}