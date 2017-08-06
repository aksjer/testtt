import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import { LayoutModule } from './core/layout/layout.module';

import { AppComponent } from './app.component';
import { reducers } from './reducers';
import { ROUTES } from './app.routes';
import { effects } from "./effects/index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      monitor: useLogMonitor({ visible: true, position: 'right' })
    }),
    StoreLogMonitorModule,
    LayoutModule,
    RouterModule.forRoot(ROUTES),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
