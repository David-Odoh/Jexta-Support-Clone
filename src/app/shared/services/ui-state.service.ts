import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIStateService {
  initialStoreWidth = window.innerWidth;

  storeWidth = new BehaviorSubject<any>(this.initialStoreWidth);
  $storeWidth = this.storeWidth.asObservable();

  secRoute = new BehaviorSubject<any>('Loading...');
  $secRoute = this.secRoute.asObservable();

  productId = '';

  constructor() { }

  updateSecondaryRoute(title) {
    this.secRoute.next(title);
  }

  updateStoreWidth(width) {
    this.storeWidth.next(width);
  }

  updateProductId(id) {
    this.productId = id;
  }
}
