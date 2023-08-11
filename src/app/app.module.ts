import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormArrayComponent } from './form-array/form-array.component';


@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormGroupComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatInputModule,
    ReactiveFormsModule,
    
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
