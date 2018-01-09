import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DisplayGiphyComponent } from './display-giphy/display-giphy.component';

import { GiphyDataService } from './giphy-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayGiphyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [GiphyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
