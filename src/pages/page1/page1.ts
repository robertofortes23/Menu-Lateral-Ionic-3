import { Component } from '@angular/core';

import { Events } from 'ionic-angular';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public events: Events) {
    this.selectMenu('menu1');
  }

  selectMenu(id) {
    this.events.publish('menu:update', id);
  }
}
