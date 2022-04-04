import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from './../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(private logSer: LoggingService, private acctSer: AccountService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.acctSer.addAccount({name:accountName, status: accountStatus});
    // console.log(`A status change occured, the new status is ${accountStatus}`);
    this.logSer.logStatusChange(accountStatus);
  }
}
