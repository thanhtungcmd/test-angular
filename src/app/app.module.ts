import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HighlightDirective } from './directive/highlight.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
