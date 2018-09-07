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
import { CarsListComponent } from './containers/car-list-container/cars-list.component';
import { AddCarComponent } from './containers/add-car-container/add-car.component';
import { CarElementComponent } from './components/car-element-component/car-element.component';
import { CarPageComponent } from './components/car-page-component/car-page.component';
import {CarFormComponent} from './components/car-form-component/car-form.component';
import {CarOwnerComponent} from './components/car-owner-component/car-owner.component';
import {EditCarComponent} from './containers/edit-car-container/edit-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarElementComponent,
    EditCarComponent,
    CarsListComponent,
    AddCarComponent,
    CarOwnerComponent,
    CarPageComponent,
    CarFormComponent,
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
