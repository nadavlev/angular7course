import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
@Injectable({
  providedIn: 'root'
})
export class DALUtilsService {

  constructor(private clientService: HttpClient) {
    console.log('dal utils are loaded');
  }

  getAllUsers() {
    return this.clientService.get<any[]>(USERS_URL);
  }

  getUser(userId: number) {
    return this.clientService.get<any>(USERS_URL + '/' + userId);
  }

  getUserEmail(userId: number) {
    return new Promise(resolve => {
      this.clientService.get<string>(`${USERS_URL}/${userId}`).subscribe( ret => resolve(ret));
    });
  }

  // updateUser (user: any) {
  //   return this.clientService.post()
  // }
}
