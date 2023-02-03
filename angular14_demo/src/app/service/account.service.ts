import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../app-state/entity/transaction.entity';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://127.0.0.1:8989/api';


  login(formProp: any) {
    return this.http.post(this.rootURL + '/account/login', { ...formProp });
  }

  signup(formProp: any) {
    return this.http.post(this.rootURL + '/account/signup', { ...formProp });
  }

}
