import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServerComponent} from './server/server.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import {UserNameComponent} from './user-name/user-name.component';
import {warningAlertComponent} from './warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent, SuccessAlertComponent, warningAlertComponent, ServerComponent,
    UserNameComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
