import { Routes } from '@angular/router';
import { CustomerPageComponent } from './containers/customer-page/customer-page.component';
import { CustomerListComponent } from "./containers/customer-list/customer-list.component";
import { CustomerDetailComponent } from "./containers/customer-detail/customer-detail.component";

export const ROUTES: Routes = [
  {
    path: '', component: CustomerPageComponent, children: [
      { path: '', component: CustomerListComponent },
      { path: ':id', component: CustomerDetailComponent }
    ]
  }
];
