import { AccountFacade } from '@angular-anim/shared/store';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Account } from 'libs/shared/services/src/lib/account';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AccountService } from 'libs/shared/services/src/lib/account.service';

@Component({
  selector: 'angular-anim-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit {

  account?: Account
 
  constructor(private activatedRoute: ActivatedRoute, private accountFacade: AccountFacade) { }

  ngOnInit(): void {
    this.loadAccount()
  }



  loadAccount() {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.accountFacade.getAccount(id!).subscribe({
      next: (response) => {
        this.account = response
      },
      error: (error) => console.log(error)      
    })
  }

}
