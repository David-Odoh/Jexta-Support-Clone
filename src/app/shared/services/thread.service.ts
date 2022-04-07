import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  threadOpener = new BehaviorSubject<any>(null);
  $threadOpener = this.threadOpener.asObservable();

  constructor() { }

  openThread(id) {
    this.threadOpener.next(id);
  }

}
