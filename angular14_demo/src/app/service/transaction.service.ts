import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:8084/api';

  gettransactions() {
    return this.http.get(this.rootURL + '/transaction/getTransaction');
  }

  addtransaction(transaction: any) {
    return this.http.post(this.rootURL + '/transaction', { transaction });
  }

  edittransaction(transaction: any) {
    return this.http.put(this.rootURL + '/transaction', { transaction });
  }

  deletetransaction(transactionId: any) {
    console.log('deleting transaction:::', transactionId);
    return this.http.delete(`${this.rootURL}/transaction/${transactionId}`);
  }
}
