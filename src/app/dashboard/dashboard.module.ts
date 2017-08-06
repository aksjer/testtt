import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./dashboard.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardModule { }
