import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { TicketService } from 'src/app/shared/services/ticket.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UIStateService } from 'src/app/shared/services/ui-state.service';
import { Dictionary } from 'src/app/shared/models/dictionary';
import { Validators } from '@angular/forms';
import { JxToasterService } from 'jx-toaster';
import { DynamicFormComponent } from 'src/app/shared/widgets/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/shared/widgets/dynamic-form/models/field-config';
import { GeneralService } from 'src/app/shared/widgets/dynamic-form/services/general.service';

@Component({
  selector: 'app-ticket-new',
  templateUrl: './ticket-new.component.html',
  styleUrls: ['./ticket-new.component.scss']
})
export class TicketNewComponent implements OnInit, OnDestroy {
  @ViewChild(DynamicFormComponent) form1: DynamicFormComponent;
  @ViewChild(DynamicFormComponent) form2: DynamicFormComponent;
  @ViewChild(DynamicFormComponent) form3: DynamicFormComponent;
  subscriptions: Subscription = new Subscription();
  viewMode;
  title;

  terms = new Dictionary().terms;

  busy = false;
  float_style = true;

  config1: FieldConfig[] = [
    {
      type: 'search_input_single',
      label: 'User Email *',
      name: 'user',
      whereToSearch: 'users',
      whereToCreate: 'createUser',
      valueType: 'email',
      searchResults: [],
      placeholder: 'Enter a email',
      z_index: '6',
      validation: [Validators.required, Validators.email]
    },
    {
      type: 'search_input_multiple',
      label: 'CC',
      name: 'copy',
      whereToSearch: 'users',
      whereToCreate: 'createUser',
      placeholder: 'Enter emails',
      validation: [Validators.email]
    },
    {
      type: 'select',
      label: 'Alert *',
      name: 'alert',
      options: [{ key: 'cdsvs', value: 'sender@gmail.com' }],
      placeholder: 'Select an option',
      z_index: '4',
      validation: [Validators.required]
    },
  ];

  config2: FieldConfig[] = [];

  config3: FieldConfig[] = [
    {
      type: 'select',
      label: 'Visibility *',
      name: 'visibility',
      options: [{ key: 'public', value: 'Public' }, { key: 'private', value: 'Private' }],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'input_pills',
      label: 'Tags for Knowledgebase',
      name: 'tags',
      placeholder: 'Enter Tags',
    },
  ];


  constructor(
    private $ui: UIStateService,
    private route: ActivatedRoute,
    private $ticket: TicketService,
    private $general: GeneralService,
    private router: Router,
    private jx: JxToasterService) {
    this.subscriptions.add(
      this.route.url.subscribe(u => {
        this.$ui.updateSecondaryRoute(u[0].path);
        this.viewMode = 'tab1';
        this.title = 'Test';
      })
    )
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.$general.search.subscribe(data => {
      this.loadSearchResults(data);
    });

    this.$general.newEntryModal.subscribe(data => {
      console.log(data)
    })
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  loadSearchResults(data) {
    console.log(data)
    if ('searchLocation' in data && 'elName' in data) {
      if (data.searchTerm)
        this.$general.returnSearchResult({ ...data, result: ['david@gmail.com', 'mary@gmail.com', 'joe@gmail.com', 'peter@gmail.com', 'bisi@gmail.com'] });
      else {
        // Send back to form
        this.$general.returnSearchResult({ ...data, result: [] })
      }
    }

    // this.searching = true;
    //   if (term != '') {
    //     const model = {
    //       term: term
    //     }
    //     this.prodService.searchProductByShop(model).subscribe(
    //       res => {
    //         let temp: any = res.responseData;
    //         console.log(temp);
    //         this.allProducts = temp;
    //         this.searching = false;
    //       }, (err) => {
    //         this.toast.popToast('error', 'Failed to Retrieve Data', 'Oops! Something went wrong. Try again');
    //         this.searching = false;
    //       });
    //   } else { }
    // }
  }

  generateAlias(name) {
    return name.toLowerCase().split(' ').join('_');
  }

  submitAll() {
    console.log('trying')
    this.$general.triggerImpromptuSubmit([]);
  }

  submit1(data: { [name: string]: any }) {
    console.log(data)
    // let model = {
    //   name: data.name,
    //   alias: this.generateAlias(data.name)
    // }
    // this.busy = true;
    // this.subscriptions.add(
    //   this.$cat.create(model).subscribe(res => {
    //     let temp: any = res;
    //     if (temp) {
    //       this.jx.pop('success', 'Added Category Successfully', ``, true);
    //       setTimeout(() => this.router.navigate([`/store/manager/category/all`]), 100);
    //     }
    //     this.busy = false;
    //   }, (err) => {
    //     this.busy = false;
    //     this.jx.pop('danger', 'Failed to Save', 'Oops! Something went wrong. Try again', true);
    //   }));
  }

  submit2(data: { [name: string]: any }) {
    console.log(data)
  }
  submit3(data: { [name: string]: any }) {
    console.log(data)
  }
}




