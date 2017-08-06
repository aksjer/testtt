import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPageComponent } from './containers/customer-page/customer-page.component';
import { ROUTES } from './customer.routes';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers';
import { CustomerService } from './services/customer.service';
import { CustomerEffects } from "./effects/index";
import { CustomerListComponent } from './containers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './containers/customer-detail/customer-detail.component';
import {
  MdListModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('customer', reducer),
    EffectsModule.forFeature([CustomerEffects]),
    MdListModule,
    MdCardModule
  ],
  declarations: [CustomerPageComponent, CustomerListComponent, CustomerDetailComponent],
  providers: [
    CustomerService
  ]
})
export class CustomerModule { }
