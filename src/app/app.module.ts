import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveUserComponent } from './active-users/active-users.component';
import { UnactiveUserComponent } from './unactive-users/unactive-users.component';
import {FormsModule} from '@angular/forms';
import {CounterService} from './counter.service';
import {UserService} from './user.service';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    AppComponent,
    ActiveUserComponent,
    UnactiveUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NzButtonModule
  ],
  providers: [CounterService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
