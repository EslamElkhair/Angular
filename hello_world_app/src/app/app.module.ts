import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HelloWorldComponent} from './app.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [HelloWorldComponent]
})
export class AppModule {
}
