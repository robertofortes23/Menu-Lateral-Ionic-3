import { Component, Input, SimpleChange } from '@angular/core';
// import { IonMaterialSidemenu } from '../components/ion-material-sidemenu';


@Component({
  selector: 'ion-material-sidemenu',
  template: `
  <div class="ion-material-sidemenu-container">
    <!-- cover header -->
    <div 
      class="ion-material-sidemenu-header" 
      (click)="_options.header.onClick && _options.header.onClick()"
      [ngStyle]="_options.header.background && {'background': _options.header.background}"
    >
      <img src="{{_options.header.picture}}" class="picture"/>
      <div class="subtitle">
        <h1>{{_options.header.username}}</h1>
        <h2 *ngIf="_options.header.email">{{_options.header.email}}</h2>
      </div>
    </div>
    <!-- end cover header -->

    <!-- content -->
    <ion-list no-lines>
      <div *ngFor="let entry of _options.entries">  
        <ion-list-header *ngIf="isDividerEntry(entry) && entry.title">
          {{entry.title}}
        </ion-list-header>
        <div class="list-separator" *ngIf="isDividerEntry(entry) && !entry.title"></div>
        <button 
          ion-item 
          menuClose
          detail-none
          [class]="entry.classes"
          [ngClass]="{'menu-item': true, 'activated': entry.isSelected}" 
          *ngIf="!isDividerEntry(entry)"
          (click)="entry.onClick && entry.onClick(entry)"
        >
          <ion-icon name="{{entry.leftIcon}}" item-left *ngIf="entry.leftIcon"></ion-icon>
          {{entry.title}}
          <ion-icon name="{{entry.rightIcon}}" item-right *ngIf="entry.rightIcon && !isBadgeEntry(entry)"></ion-icon>
          <ion-badge [color]="entry.badge.color" item-right *ngIf="isBadgeEntry(entry)">{{entry.badge.text}}</ion-badge>
        </button>
      </div>
    </ion-list>
    <!-- end content -->
  </div>
  `,
  styles: [`
    .ion-material-sidemenu-header {
      height: 146px;
      padding: 16px 16px 8px 16px;
      margin-bottom: 8px;
      border-bottom: 1px solid #dedede;
    }
    .ion-material-sidemenu-header img.picture {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .ion-material-sidemenu-header div.subtitle {
      margin-top: 6px;
      height: 52px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    .ion-material-sidemenu-header div.subtitle h1, h2 {
      margin: 4px 0 0 0;
      width: 100%;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: white;
    }
    .ion-material-sidemenu-header div.subtitle h2 {
      font-weight: 400;
    }
    .ion-material-sidemenu-container .menu-item {
      font-weight: 500;
      font-size: 14px;
      color: #333;
    }
    .ion-material-sidemenu-container .menu-item .icon {
      color: #757575;
      font-size: 24px;
      min-height: 24px;
    }
    .ion-material-sidemenu-container .list-header {
      margin: 8px auto 0 auto;
      border-top: 1px solid #dedede;
      text-transform: capitalize;
    }
    .ion-material-sidemenu-container .list-separator {
      margin: 8px auto;
      border-bottom: 1px solid #dedede;
    }
  `]
})
export class IonMaterialSidemenu {
  @Input() options: IonMaterialSidemenuOptions;

  private _options = {};

  constructor() { }

  ngOnInit() {
    if (this.options === undefined || this.options === null) {
      console.error('[IonMaterialSidemenu] options are not defined.');
      return;
    }
    this._options = this.options;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    let o: SimpleChange = changes['options'];
    if (this.options && o && !o.isFirstChange()) {
      this._options = o.currentValue;
    }
  }

  isBadgeEntry(entry) {
    return entry.badge && entry.badge.text;
  }

  isDividerEntry(entry) {
    return entry.isDivider && entry.isDivider === true;
  }
}

export interface IonMaterialSidemenuOptions {
  header: {
    background: string,
    picture: string,
    username: string,
    email?: string,
    onClick?: Function
  },
  entries: Array<{
    title?: string,
    isSelected?: boolean,
    isDivider?: boolean,
    component?: any,
    leftIcon?: string,
    rightIcon?: string,
    classes?: string,
    onClick?: Function,
    badge?: {
      text?: string,
      color?: string
    }
  }>
}
