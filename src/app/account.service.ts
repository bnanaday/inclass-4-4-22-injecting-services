import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Test Account',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(private logSer: LoggingService) {}

  addAccount(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
    this.logSer.logStatusChange(status);
  }

  updateStatus(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.logSer.logStatusChange(updateInfo.newStatus);
  }
}
