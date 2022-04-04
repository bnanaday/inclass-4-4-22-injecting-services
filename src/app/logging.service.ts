//import {Injectable} from '@angular/core';

export class LoggingService {
  constructor() {}

  logStatusChange(status: string) {
    console.log('A status change occured and new status is ${newStatus}');
  }
}
