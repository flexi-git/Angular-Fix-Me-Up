import { createAction, props } from "@ngrx/store";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from "libs/shared/services/src/lib/account";
import { Observable } from "rxjs";


export const getAccountAction = createAction('[Account] Get account', props<{accounts: Observable<Account[]>}>())