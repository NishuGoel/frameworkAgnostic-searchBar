import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {createCustomElement} from '@angular/elements';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent, SearchBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SearchBarComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {

  }
  ngDoBootstrap() {
    const searchBar = createCustomElement(SearchBarComponent, {injector: this.injector});
    customElements.define('ng-search-bar', searchBar);
  }
}
