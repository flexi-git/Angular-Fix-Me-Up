/** 
 * TODO: 10. Asynchronous Programming (RxJS)
 * TODO: 13. Angular (NX) Architecture
*/
import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from 'libs/shared/services/src/lib/account';
import { AccountFacade } from '@angular-anim/shared/store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountService } from 'libs/shared/services/src/lib/account.service';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'sum-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {
  accounts$: Observable<Account[]> = of([]);

  //constructor(private accountService: AccountService) {}
  constructor(private accountFacade: AccountFacade) {}
  
  accounts: Account[] = [];

  ngOnInit(): void {
    // this.accountService.getAccounts().subscribe((accounts) => {
    //   this.accounts = accounts;
    // });
    this.accountFacade.dispatchAccount()

    this.getAccounts();
  }


  getAccounts() {
    this.accounts$ = this.accountFacade.getAccounts()
  }
  filterAccounts(cur: string) {
    this.accounts$ = this.accountFacade.getAccounts().pipe(
      map( acc => acc.filter(a => a.currency === cur))
    )
  }
  
  onCurrencySelected(event: any) {
    const param = event.target.value
    if(param === '') {
      this.getAccounts()
    } else {
      this.filterAccounts(param)
    }    
  }

}
