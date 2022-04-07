import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  impromptu_submit = new BehaviorSubject<object>([]);
  searcher = new BehaviorSubject<object>([]);
  _searchResult = new BehaviorSubject<object>([]);
  _newEntryModal = new BehaviorSubject<string>('');

  impromptu_submission = this.impromptu_submit.asObservable();
  search = this.searcher.asObservable();
  searchResult = this._searchResult.asObservable();
  newEntryModal = this._newEntryModal.asObservable();

  triggerImpromptuSubmit(data) {
    this.impromptu_submit.next(data);
  }

  triggerSearch(data) {
    this.searcher.next(data);
  }

  returnSearchResult(data) {
    this._searchResult.next(data);
  }

  openNewEntryModal(data) {
    this._newEntryModal.next(data);
  }
}
