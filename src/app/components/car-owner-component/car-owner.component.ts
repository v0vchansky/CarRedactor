// angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { Owner } from '../../models/owner.model';

@Component({
    selector: 'car-owner',
    templateUrl: './car-owner.template.html',
    styleUrls: []
})
export class CarOwnerComponent {

    @Input() ownerId: number;
    @Input() owner: Owner;
    @Input() isDisabled: any;

    @Output() onDeleteOwner = new EventEmitter<number>();

    constructor() {}

    deleteOwner(owner) {
        this.onDeleteOwner.emit(owner);
    }
}