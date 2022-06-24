import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss']
})
export class LightSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOn = false;

  toggle() {
    this.isOn = !this.isOn;
  }

  get message() { return 'The light is ' + (this.isOn ? 'On' : 'Off'); }

}
