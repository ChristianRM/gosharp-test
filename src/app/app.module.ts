import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdvModule } from './pdv/pdv.module'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryService } from './memory.service';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdvModule,
    HttpClientInMemoryWebApiModule.forRoot(MemoryService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
