import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public getCurrentMilis() {
    return (new Date()).getTime();
  }

}
