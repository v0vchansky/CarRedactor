// angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// models
import { Owner } from '../../../models/owner.model';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent {

  @Input() ownerId: number;
  @Input() owner: Owner;
  @Input() isDisabled: any;

  @Output() onDeleteOwner = new EventEmitter<number>();

  constructor() {}

  deleteOwner(owner) {
      this.onDeleteOwner.emit(owner);
  }
}
