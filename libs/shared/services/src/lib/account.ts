import { Observable } from "rxjs";

export interface Account {
  id: string;
  balance: number;
  currency: string;
}

export interface AccountStateInterface {
  data: Observable<Account[]>
}