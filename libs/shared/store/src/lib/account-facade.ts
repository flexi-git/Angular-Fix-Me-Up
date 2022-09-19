import { Injectable } from "@angular/core"
import { select, Store } from "@ngrx/store"
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account, AccountStateInterface } from "libs/shared/services/src/lib/account"
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountService } from "libs/shared/services/src/lib/account.service"
import { map, Observable, of, switchMap } from "rxjs"
import { getAccountAction } from "./account-state/account-actions"
import { accountSelector } from "./account-state/account-selector"

@Injectable({
    providedIn: 'root'
  })
  export class AccountFacade {
    constructor(private store: Store<AccountStateInterface>, private accountService: AccountService) { }
    
    getAccount(id: string): Observable<Account | undefined> {
      return this.store.pipe(
        select(accountSelector)
      ).pipe(
        switchMap(x => x),
        map(y => {
               return of(y.find(z => z.id == id))
            }
        ),
        switchMap(z => z)
      )
    }

    getAccounts(): Observable<Account[]> {
      return this.store.pipe(
        select(accountSelector)
      ).pipe(
        switchMap(x => x)
      )
    }
    dispatchAccount() {
        this.store.dispatch(getAccountAction({accounts: this.accountService.getAccounts()}))
      }

  }