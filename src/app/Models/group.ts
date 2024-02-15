import { Balance } from "./balance";
import { Expense } from "./expense";
import { User } from "./user"; 

export interface Group {
    Name: string;
    users: User[];
    balances: Balance[];
    expenses: Expense[]
}