// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { CarsListComponent } from './containers/car-list-container/cars-list.component';
import { CarPageComponent } from './components/car-page-component/car-page.component';
import {AddCarComponent} from './containers/add-car-container/add-car.component';
import {EditCarComponent} from './containers/edit-car-container/edit-car.component';

const appRoutes: Routes = [
  {
    path: 'show-car/:id',
    component: CarPageComponent,
  },
  {
    path: 'edit-car/:id',
    component: EditCarComponent,
  },
  {
    path: 'add-car',
    component: AddCarComponent,
  },
  {
    path: '',
    component: CarsListComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
