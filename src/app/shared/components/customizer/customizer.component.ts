import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {
  @Input() showCustomizer = false;
  @Output() toggle = new EventEmitter();
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleCustomizer() {
    this.toggle.emit(null);
  }

  changeBg(colorName) {
    this.change.emit(`landing-${colorName}`)
  }
}
