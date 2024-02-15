import { Component } from '@angular/core';
import { ExpenseService } from '../../../Services/expense.service';
import { Expense } from '../../../Models/expense';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

  $expenses: Observable<Expense[]>;
 
  constructor(private expenseService: ExpenseService){}

  ngOnInit(): void {
    this.$expenses = this.expenseService.getExpenses()
  }
}
