import { createFeatureSelector, createSelector } from "@ngrx/store"
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountStateInterface } from "libs/shared/services/src/lib/account"

const accountFeatureSelector = createFeatureSelector<AccountStateInterface>('account')

export const accountSelector = createSelector(
    accountFeatureSelector,
    (accounts: AccountStateInterface) => accounts.data
)