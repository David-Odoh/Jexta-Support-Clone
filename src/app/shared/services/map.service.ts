import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  location = new BehaviorSubject<any>(null);
  $location = this.location.asObservable();

  productId = '';

  constructor() { }

  updateLocation(loc) {
    this.location.next(loc);
  }

}