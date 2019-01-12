import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private navItemSource = new BehaviorSubject<string>(null);

  navItem$ = this.navItemSource.asObservable();
}
