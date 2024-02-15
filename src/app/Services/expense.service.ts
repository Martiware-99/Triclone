import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../Models/expense';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  URL: string = 'https://localhost:44360/api/Expense';

  constructor(private http: HttpClient){}

  getExpenses(): Observable<Expense[]>{
    return this.http.get<Expense[]>(this.URL)
  }

}
