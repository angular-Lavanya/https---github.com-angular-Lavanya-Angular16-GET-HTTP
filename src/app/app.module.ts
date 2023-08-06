import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterceptorService } from './loader/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule
   
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
