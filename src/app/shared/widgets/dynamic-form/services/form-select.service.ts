import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormSelectService {
  _init_option = { key: "", value: "" };

  return_selected_option = new BehaviorSubject<object>(this._init_option);
  return_multichoice_selections = new BehaviorSubject<object>([]);

  selected_option = this.return_selected_option.asObservable();
  multichoice_selections = this.return_multichoice_selections.asObservable();

  updateSelectedOption(option) {
    this.return_selected_option.next(option);
  }

  updateMultichoiceSelections(selections) {
    this.return_multichoice_selections.next(selections);
  }
}
