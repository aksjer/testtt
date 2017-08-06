import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  MdSidenavModule,
  MdListModule,
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdProgressBarModule
} from '@angular/material';
import { LayoutComponent } from './layout.component';
import { reducer } from './reducers';
import { RouterModule } from "@angular/router";
import { LayoutEffects } from "./effects";

@NgModule({
  imports: [
    CommonModule,
    MdSidenavModule,
    MdListModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    StoreModule.forFeature('layout', reducer),
    EffectsModule.forFeature([LayoutEffects]),
    RouterModule,
    MdProgressBarModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
