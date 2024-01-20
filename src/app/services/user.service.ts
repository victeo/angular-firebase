import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    public identity: any;


  constructor() { }


  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity') as string);

    if (identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }
}
