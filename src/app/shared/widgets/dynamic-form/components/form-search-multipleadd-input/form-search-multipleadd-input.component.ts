import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FieldConfig } from '../../models/field-config';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-form-search-multipleadd-input',
  templateUrl: './form-search-multipleadd-input.component.html',
  styleUrls: ['./form-search-multipleadd-input.component.scss']
})
export class FormSearchMultipleaddInputComponent implements OnInit {
  config: FieldConfig;
  group: FormGroup;
  isEven: Boolean;
  showSearchPane = false

  options = [];
  tags = [];
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

  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeList();
    }, 10);
  }

  getInput(input: HTMLInputElement) {
    if (input.value) {
      // Get the last index of the last item in the options array

      let id
      if (this.options.length == 0) {
        id = this.options.lastIndexOf(this.options[this.options.length - 1]) + 1;
      } else {
        id = this.options[this.options.length - 1].id;
      }

      // Increment the index and equate to id
      let value = input.value

      //  Push new data structure into the options array
      this.options.push(value)

      // Make the option array ready to export
      this.group.controls[this.config.name].patchValue(this.options);

      // Clear the input field
      input.value = null
    }
  }

  initializeList() {
    this.group.controls[this.config.name].valueChanges.subscribe(val => {
      if (Array.isArray(val)) {
        this.options = val;
      }
    });
  }

  addTags() {
    this.tags.map(e => {
      // Remove property if it already exists in array
      this.options = this.options.filter(opt => opt != e);

      // Add property to Array
      this.options.push(e);

      // Make the option array ready to export
      this.group.controls[this.config.name].patchValue(this.options);

    })
  }

  remove(_opt) {
    if (_opt) {
      this.options = this.options.filter(opt => opt != _opt);

      // Make the option array ready to export
      this.group.controls[this.config.name].patchValue(this.options);
    }
  }

  // SEARCH
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
    if (result) {

      // Get the last index of the last item in the options array
      let id
      if (this.options.length == 0) {
        id = this.options.lastIndexOf(this.options[this.options.length - 1]) + 1;
      } else {
        id = this.options[this.options.length - 1].id;
      }

      // Increment the index and equate to id
      let value = result

      //  Push new data structure into the options array
      this.options.push(value)

      // Make the option array ready to export
      this.group.controls[this.config.name].patchValue(this.options);

      this.showSearchPane = false;
      // this.searchResults = [];
    }
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
