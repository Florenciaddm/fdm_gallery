import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { PersonasService } from './services/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule,HttpClient,PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
