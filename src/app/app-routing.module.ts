import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {Ex2Component} from './ex2/ex2.component';
import {Ex3Component} from './ex3/ex3.component';
import {ParentdemoComponent} from './parentdemo/parentdemo.component';
import {Ex4Component} from './ex4/ex4.component';
import {Ex44Component} from './ex44/ex44.component';
import {Ex5Component} from './ex5/ex5.component';
import {Ex6Component} from './ex6/ex6.component';
import {FormParentComponent} from './form-parent/form-parent.component';
import {PipedemoComponent} from './pipedemo/pipedemo.component';


const routes: Routes = [
  {
    path: 'person',
    component: PersonComponent
  },
  {
    path: 'ex2',
    component: Ex2Component
  },
  {
    path: 'ex3',
    component: Ex3Component
  },
  {
    path: 'ex4',
    component: Ex4Component
  },
  {
    path: 'ex44',
    component: Ex44Component
  },
  {
    path: 'ex5',
    component: Ex5Component
  },
  {
    path: 'ex6',
    component: Ex6Component
  },
  {
    path: 'parent',
    component: ParentdemoComponent
  },
  {
    path: 'forms',
    component: FormParentComponent
  },
  {
    path: 'pipeComponent',
    component: PipedemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
