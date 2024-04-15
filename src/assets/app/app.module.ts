import { BrowserModule } from '@angular/platsign-browser';
import { NgModule } from '@angular/core';
import { ReactivesignsModule } from '@angular/signs';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupsignComponent } from './signup-sign/signup-sign.component'; // Ensure the path here matches the file location exactly

@NgModule({
  declarations: [
    AppComponent,
    SignupsignComponent  // Confirm this component is declared here
  ],
  imports: [
    BrowserModule,
    ReactivesignsModule, // Make sure ReactivesignsModule is imported here
    HttpClientModule // Make sure HttpClientModule is imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
