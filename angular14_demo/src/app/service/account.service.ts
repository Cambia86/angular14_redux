import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../app-state/entity/transaction.entity';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8084/api';


  login(formProp: any) {
    return this.http.post(this.rootURL + '/account/login', { ...formProp });
  }

  signup(formProp: any) {
    return this.http.post(this.rootURL + '/account/signup', { ...formProp });
  }

}
