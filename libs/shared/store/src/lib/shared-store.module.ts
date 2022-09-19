import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userReducer, userKey } from './+state/user-reducer';
import { AccountReducer } from './account-state/account-reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(userKey, userReducer),    
    StoreModule.forFeature('account', AccountReducer)
  ],
})
export class SharedStoreModule {}
