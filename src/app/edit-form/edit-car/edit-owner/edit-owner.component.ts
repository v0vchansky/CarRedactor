// angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { Owner } from '../../../models/owner.model';

@Component({
  selector: 'app-edit-owner',
  templateUrl: './edit-owner.component.html',
  styleUrls: ['./edit-owner.component.css']
})
export class EditOwnerComponent {

  @Input() ownerId: number;
  @Input() owner: Owner;
  @Input() isDisabled: any;

  @Output() onDeleteOwner = new EventEmitter<number>();

  constructor() {}

  deleteOwner(owner) {
    this.onDeleteOwner.emit(owner);
  }
}
