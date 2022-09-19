import { Action, createReducer, on } from "@ngrx/store";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account, AccountStateInterface } from "libs/shared/services/src/lib/account";
import { Observable } from "rxjs";
import { getAccountAction } from "./account-actions";

const initialAccountState: AccountStateInterface = {
    data: new Observable<Account[]>
}

const accountReducer = createReducer(

    initialAccountState,
    on(getAccountAction, (state, action): AccountStateInterface => {
        return {
            ...state,
            data: action.accounts
        }
    })
)

export function AccountReducer(state: AccountStateInterface, action: Action) {
    return accountReducer(state, action)
}