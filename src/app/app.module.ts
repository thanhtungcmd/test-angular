import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HighlightDirective } from './directive/highlight.directive';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubDataComponent } from './sub-data/sub-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    HighlightDirective,
    SubDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
