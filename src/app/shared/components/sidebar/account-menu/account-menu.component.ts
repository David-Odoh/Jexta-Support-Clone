import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { UIStateService } from 'src/app/shared/services/ui-state.service';

@Component({
  selector: 'account-menu',
  templateUrl: './account-menu.component.html',
  styleUrls: ['./account-menu.component.scss']
})
export class AccountMenuComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();

  @Input() accountMenu = false;
  @Input() accountLinks = [];

  @HostBinding("class")
  get dynamicClass() {
    return "dropdown-menu accountMenu float_menu"; // Uploaded
  }

  @HostBinding('style') style: SafeStyle;

  constructor(private sanitizer: DomSanitizer, private $UI_State: UIStateService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(
      // Keeps menu in focus
      this.$UI_State.$storeWidth.subscribe(w => {
        if (w < 940 && w >= 760)
          this.style = this.sanitizer.bypassSecurityTrustStyle(`transform: translate(-30px, 0px);`);
        else if (w < 760 && w >= 420)
          this.style = this.sanitizer.bypassSecurityTrustStyle(`transform: translate(-60px, 0px);`);
        else if (w < 420)
          this.style = this.sanitizer.bypassSecurityTrustStyle(`transform: translate(-100px, 0px);`);
        else
          this.style = this.sanitizer.bypassSecurityTrustStyle(`transform: translate(0px, 0px);`);
      }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
