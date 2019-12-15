import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {


  constructor(private counterService: CounterService) { }

  public activeUsers: string[] = ['Egor'];

  public unactiveUsers: string[] = ['Andrew'];


  public setToInactive(user: string): void {
    this.counterService.count()
    this.activeUsers.splice(this.activeUsers.indexOf(user), 1);
    this.unactiveUsers.push(user);
  }

  public setToActive(user: string): void {
    this.counterService.count()
    this.unactiveUsers.splice(this.unactiveUsers.indexOf(user), 1);
    this.activeUsers.push(user);
  }

  public addInactiveUser(user: string): void {
    this.unactiveUsers.push(user);
  }
}
