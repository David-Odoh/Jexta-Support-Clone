import { Component, HostListener, OnInit } from '@angular/core';
import { UIStateService } from '../../services/ui-state.service';

@Component({
  selector: 'app-store-layout',
  templateUrl: './store-layout.component.html',
  styleUrls: ['./store-layout.component.scss']
})
export class StoreLayoutComponent implements OnInit {
  backgroundColor = "landing-red";
  showCustomizer = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // Update Screen Width on Resize
    this.$UI_State.updateStoreWidth(event.target.innerWidth);
  }

  constructor(private $UI_State: UIStateService) {
    // Remove code if you don't wish to retrieve colo from local storage
    // Or add more checks to ensure it is  a valid 'theme class' before assigning it
    let themeColor = localStorage.getItem('theme-color');
    if (themeColor) this.backgroundColor = themeColor;
  }

  ngOnInit() { }

  changeBg(colorName) {
    console.log(colorName)
    this.backgroundColor = colorName;

    // Persist to Local Storage
    localStorage.setItem('theme-color', colorName)
  }

  toggleCustomizer() {
    this.showCustomizer = !this.showCustomizer;
  }
}