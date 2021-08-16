import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HealthBarsComponent } from './components/health-bars/health-bars.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TurnsListComponent } from './components/turns-list/turns-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthBarsComponent,
    ButtonsComponent,
    TurnsListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
