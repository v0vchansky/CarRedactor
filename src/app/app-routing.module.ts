// angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { FormComponent } from './form/form.component';
import { CarsListComponent } from './containers/car-list-container/cars-list.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CarPageComponent } from './components/car-page-component/car-page.component';

const appRoutes: Routes = [
  {
    path: 'show-car/:id',
    component: CarPageComponent,
  },
  {
    path: 'edit-car/:id',
    component: EditFormComponent,
  },
  {
    path: 'add-car',
    component: FormComponent,
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
