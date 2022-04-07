import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { OfficeRoutingModule } from './office-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroOneComponent } from './components/intro-one/intro-one.component';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';
import { IntroFourComponent } from './components/intro-four/intro-four.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { WidgetModule } from 'src/app/shared/widgets/widget.module';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { ThreadComponent } from './components/thread/thread.component';
import { ThreadContentComponent } from './components/thread-content/thread-content.component';
import { ModalsModule } from 'src/app/shared/modals/modals.module';
import { DynamicFormModule } from 'src/app/shared/widgets/dynamic-form/dynamic-form.module';
import { DynamicComposerModule } from 'src/app/shared/widgets/dynamic-composer/dynamic-composer.module';
import { TicketNewComponent } from './components/ticket-new/ticket-new.component';
import { TicketViewComponent } from './components/ticket-view/ticket-view.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IntroOneComponent,
    IntroFourComponent,
    TicketPageComponent,
    TicketsComponent,
    TicketListComponent,
    TicketCardComponent,
    ThreadComponent,
    ThreadContentComponent,
    TicketNewComponent,
    TicketViewComponent,
  ],
  imports: [
    CommonModule,
    OfficeRoutingModule,
    NgbModule,
    DirectiveModule,
    RouterModule,
    WidgetModule,
    DynamicFormModule,
    ModalsModule,
    DynamicComposerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
  ],
})
export class OfficeModule { }
