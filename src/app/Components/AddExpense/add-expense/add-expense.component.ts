import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  @Output() expenseAdded: EventEmitter<any> = new EventEmitter<any>();

  description: string = '';
  amount: number = 0;
  members: any[] = [
    { name: 'Member A', checked: false },
    { name: 'Member B', checked: false },
    { name: 'Member C', checked: false }
  ];
  splitAmount: number = 0;

  addExpense() {
    const selectedMembers = this.members.filter(member => member.checked);
    this.splitAmount = this.amount / selectedMembers.length;
    const expenseData = {
      description: this.description,
      amount: this.amount,
      selectedMembers: selectedMembers
    };
    this.expenseAdded.emit(expenseData);
  }
}
