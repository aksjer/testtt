import { Routes } from '@angular/router';
import { DashboardPageComponent } from "./containers/dashboard-page/dashboard-page.component";

export const ROUTES: Routes = [
  {
    path: '', component: DashboardPageComponent, children: [
      // { path: '', component: CustomerListComponent },
      // { path: ':id', component: CustomerDetailComponent }
    ]
  }
];
