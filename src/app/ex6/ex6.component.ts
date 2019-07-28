import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {DALUtilsService} from '../dalutils.service';
import {ApiUser} from '../api-user';

const users_url = 'https://jsonplaceholder.typicode.com/users';
const tasts_url = 'https://jsonplaceholder.typicode.com/todos';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.scss']
})
export class Ex6Component implements OnInit, OnDestroy {
  users: any[];
  user: any = {};
  tasks: any[] = [];
  allUsersUnsubscribe: Subscription;
  userEmail: string;
  apiUser: ApiUser;

  constructor(private dalUtils: DALUtilsService) { }

  ngOnInit() {
console.log('starting on init');
const arr: number[] = [2, 5, 7, 3, 2, 6, 6];
const prom: Promise<any> = new Promise(resolve => {
      setTimeout(() => {
        resolve( arr.reduce((curr, next) => curr + next  ));
      }, 2000);
    });
prom.then(val => console.log(val));
  }


  ngOnDestroy(): void {
    this.allUsersUnsubscribe.unsubscribe();
  }

  getAllUsers() {
    this.allUsersUnsubscribe = this.dalUtils.getAllUsers().subscribe( res => this.users = res);
    console.log(this.users);
  }

  getUser(userId: number) {
    this.dalUtils.getUser(userId).subscribe(res => this.user = res);
    this.getUserEmail(userId);
  }
  //
  // getAllTasksAndFilter(userId: number) {
  //   this.clientService.get<any[]>(tasts_url).subscribe(res => {
  //     console.log(res);
  //     this.tasks = res.filter(task => task.userId === userId);
  //   });
  // }

  getUserEmail(userId: number) {
    this.dalUtils.getUserEmail(userId).then((ret) => { this.userEmail = ret.toString(); });
  }

  getApiUser(id: number) {
    this.dalUtils.getUser(id).subscribe(res => {
      this.apiUser.name = res.name;
      this.apiUser.email = res.email;
      this.apiUser.username = res.userName;
    });
  }

  submitToServer() {

  }
}
