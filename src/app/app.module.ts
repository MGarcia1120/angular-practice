import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { WarningComponent } from './components/messages/warning/warning.component';
import { SuccessComponent } from './components/messages/success/success.component';
import { DirectivesPracticeComponent } from './components/directives-practice/directives-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningComponent,
    SuccessComponent,
    DirectivesPracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
