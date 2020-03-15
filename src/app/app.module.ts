import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import Wijmo modules
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// apply Wijmo license key
import { setLicenseKey } from 'wijmo/wijmo';
setLicenseKey('your license key goes here');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPige } from './app.sqrt';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    SqrtPige,
    AppComponent,
    ChangeTextDirective,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjGridModule,
    WjChartModule,
    WjInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
