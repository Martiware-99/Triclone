import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../Services/expense.service';
import { Expense } from '../../../Models/expense';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-expenses',
  templateUrl: './my-expenses.component.html',
  styleUrl: './my-expenses.component.scss'
})
export class MyExpensesComponent implements OnInit{
  $expenses: Observable<Expense[]>;
  expenses: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

 
  constructor(private expenseService: ExpenseService){}

  ngOnInit(): void {
    this.$expenses = this.expenseService.getExpenses()
  }
}
