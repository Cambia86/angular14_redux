import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../app-state/entity/transaction.entity';


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
    return this.http.post(this.rootURL + '/transaction/createTransaction', { transaction });
  }

  edittransaction(transaction: any) {
    return this.http.post(this.rootURL + '/transaction/updateTransactionById/' + transaction.id, { transaction });
  }

  deletetransaction(transactionId: any) {
    console.log('deleting transaction:::', transactionId);
    return this.http.delete(`${this.rootURL}/transaction/${transactionId}`);
  }
}
