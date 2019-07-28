import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PersonComponent} from './person/person.component';
import {Ex2Component} from './ex2/ex2.component';
import {Ex3Component} from './ex3/ex3.component';
import {ParentdemoComponent} from './parentdemo/parentdemo.component';
import {ChileddemoComponent} from './chileddemo/chileddemo.component';
import {Ex4Component} from './ex4/ex4.component';
import {AddParentComponent} from './add-parent/add-parent.component';
import {AddlistComponent} from './addlist/addlist.component';
import {Ex44Component} from './ex44/ex44.component';
import {Ex6Component} from './ex6/ex6.component';
import {Ex5Component} from './ex5/ex5.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FormsDemoComponent} from './forms-demo/forms-demo.component';
import {FormParentComponent} from './form-parent/form-parent.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { MypipePipe } from './mypipe.pipe';
import { SliderpipePipe } from './sliderpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    Ex2Component,
    Ex3Component,
    ParentdemoComponent,
    ChileddemoComponent,
    Ex4Component,
    AddParentComponent,
    AddlistComponent,
    Ex44Component,
    Ex6Component,
    Ex5Component,
    FormsDemoComponent,
    FormParentComponent,
    PipedemoComponent,
    MypipePipe,
    SliderpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
