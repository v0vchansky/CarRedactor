// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// reducers
import { CarsReducer } from './redux/cars.reducer';

// components
import { AppComponent } from './app.component';
import { EditOwnerComponent } from './edit-form/edit-car/edit-owner/edit-owner.component';
import { CarsListComponent } from './containers/car-list-container/cars-list.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { EditCarComponent } from './edit-form/edit-car/edit-car.component';
import { FormComponent } from './form/form.component';
import { AddCarComponent } from './form/add-car/add-car.component';
import { AddOwnerComponent } from './form/add-car/add-owner/add-owner.component';
import { CarElementComponent } from './components/car-element-component/car-element.component';
import { CarPageComponent } from './components/car-page-component/car-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CarElementComponent,
    EditOwnerComponent,
    EditFormComponent,
    EditCarComponent,
    CarsListComponent,
    FormComponent,
    AddCarComponent,
    AddOwnerComponent,
    CarPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.forRoot({carPage: CarsReducer}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
