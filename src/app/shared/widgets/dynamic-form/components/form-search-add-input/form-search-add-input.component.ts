import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FieldConfig } from '../../models/field-config';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-form-search-add-input',
  templateUrl: './form-search-add-input.component.html',
  styleUrls: ['./form-search-add-input.component.scss']
})
export class FormSearchAddInputComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  isEven: Boolean;
  showSearchPane = false;

  searchTerm$ = new Subject<string>();
  constructor(private $general: GeneralService) {
    this.search(this.searchTerm$);
  }

  searchResults = [];

  ngOnInit() {
    this.$general.searchResult.subscribe((sr: any) => {
      if ('elName' in sr) {
        if (sr.elName == this.config.name)
          this.searchResults = sr.result;
      }
    })
  }

  // Updating Search Parameter
  search(terms: Observable<string>) {
    terms.pipe(debounceTime(400),
      distinctUntilChanged(),
    ).subscribe(term => {
      if ('whereToSearch' in this.config)
        this.$general.triggerSearch({ searchLocation: this.config.whereToSearch, searchTerm: term, elName: this.config.name })
    });
  }

  chooseResult(result) {
    this.group.controls[this.config.name].patchValue(result);
    this.showSearchPane = false;
    // this.searchResults = [];
  }

  closeSearchResults() {
    this.showSearchPane = false;
  }

  openSearchResults(e: Event) {
    e.stopPropagation();
    this.showSearchPane = true;
  }

  openDialog(loc) {
    this.$general.openNewEntryModal(loc);
  }
}
