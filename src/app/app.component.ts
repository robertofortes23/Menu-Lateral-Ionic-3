import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonMaterialSidemenuOptions } from '../components/ion-material-sidemenu';

import { Page1 } from '../pages/page1/page1';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  menuOptions: IonMaterialSidemenuOptions;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController, public events: Events) {
    this.initializeApp();

    // initialize the menu
    this.menuOptions = this.menu1(); 

    // events are used only for the demo to update the menu with the different examples
    // you don't have to use them
    events.subscribe('menu:update', (id) => {
      if (id === 'menu2') {
        this.menuOptions = this.menu2();
      } else if (id === 'menu3') {
        this.menuOptions = this.menu3();
      } else {
        this.menuOptions = this.menu1();
      }
      this.menuCtrl.open();
    });
  }

  // GMAIL example
  menu1() {
    let _t = this;
    return {
      header: {
        background: '#ccc url(./assets/menu_bg1.jpg) no-repeat top left / cover',
        // background: 'linear-gradient(to right, #347eff 0%, #1ea3ff 100%)',
        picture: 'https://avatars2.githubusercontent.com/u/1867703?v=3&s=460',
        username: 'Iclic Labs - Gmail',
        email: 'icl1clabs@gmail.com',
        onClick: () => { alert('menu header clicked'); }
      },
      entries: [
        { 
          title: 'Inbox', 
          leftIcon: 'mail',
          onClick: () => { _t.nav.setRoot(Page1) }
        },
        { 
          title: 'Starred', 
          leftIcon: 'star', 
          component: Page1, 
          onClick: (entry) => { _t.nav.setRoot(entry.component) }
        },
        { title: 'Sent mail', leftIcon: 'send', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Drafts', leftIcon: 'mail-open', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'All mail', leftIcon: 'mail', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Trash', leftIcon: 'trash', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Spam', leftIcon: 'alert', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Labels', isDivider: true },
        // item with a right icon
        { 
          title: 'Label 1', 
          leftIcon: 'square-outline', 
          rightIcon: 'ios-arrow-forward', // define a right icon
          onClick: () => { _t.nav.setRoot(Page1) } 
        },
        // item with a badge
        { title: 'Label 2', 
          leftIcon: 'square-outline',
          classes: 'my-custom-css-class', // optional custom classes
          badge: { //you can also define a badge
            text: '3',
            color: 'secondary'
          },
          onClick: () => { _t.nav.setRoot(Page1) }
        },
        { title: 'Label 3', leftIcon: 'square-outline', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Label 4', leftIcon: 'square-outline', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Label 5', leftIcon: 'square-outline', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Label 6', leftIcon: 'square-outline', onClick: () => { _t.nav.setRoot(Page1) } },
      ]
    };
  }

  menu2() {
    let _t = this;
    return {
      header: {
        background: '#ccc url(./assets/menu_bg2.jpg) no-repeat top left / cover',
        picture: 'https://avatars2.githubusercontent.com/u/1867703?v=3&s=460',
        username: 'Iclic Labs - Google Keep Menu',
        email: 'icl1clabs@gmail.com',
        onClick: () => { alert('menu header clicked'); }
      },
      entries: [
        { isSelected: true, title: 'Notes', leftIcon: 'bookmarks', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Reminders', leftIcon: 'time', onClick: (entry) => { _t.nav.setRoot(Page1) } },
        { title: 'Labels', isDivider: true },
        { title: 'Inspiration', leftIcon: 'pricetag', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Personal', leftIcon: 'pricetag', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Work', leftIcon: 'pricetag', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Create new label', leftIcon: 'add', onClick: () => { _t.nav.setRoot(Page1) } },
        { isDivider: true },
        { title: 'Archive', leftIcon: 'archive', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Trash', leftIcon: 'trash', onClick: () => { _t.nav.setRoot(Page1) } },
        { isDivider: true },
        { title: 'Settings', leftIcon: 'settings', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Help & feedback', leftIcon: 'help-circle', onClick: () => { _t.nav.setRoot(Page1) } }
      ]
    };
  }

  menu3() {
    let _t = this;
    return {
      header: {
        background: '#ccc url(./assets/menu_bg3.jpg) no-repeat top left / cover',
        picture: 'https://avatars2.githubusercontent.com/u/1867703?v=3&s=460',
        username: 'Iclic Labs - Google Home Menu',
        email: 'icl1clabs@gmail.com',
        onClick: () => { alert('menu header clicked'); }
      },
      entries: [
        { title: 'Cast screen / audio', leftIcon: 'send', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Google Assistant', isDivider: true },
        { title: 'Things to Ask', leftIcon: 'chatboxes', onClick: (entry) => { _t.nav.setRoot(Page1) } },
        { title: 'Music', leftIcon: 'musical-note', onClick: (entry) => { _t.nav.setRoot(Page1) } },
        { title: 'Home control', leftIcon: 'home', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Shopping list', leftIcon: 'list', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'More settings', leftIcon: 'more', onClick: () => { _t.nav.setRoot(Page1) } },
        { isDivider: true },
        { title: 'Devices', leftIcon: 'apps', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Account preferences', leftIcon: 'contact', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Offers', leftIcon: 'albums', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'How to cast', leftIcon: 'bookmark', onClick: () => { _t.nav.setRoot(Page1) } },
        { isDivider: true },
        { title: 'Google Store', leftIcon: 'appstore', onClick: () => { _t.nav.setRoot(Page1) } },
        { title: 'Help & feedback', leftIcon: 'help-circle', onClick: () => { _t.nav.setRoot(Page1) } }
      ]
    };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //set this.nav.push(to have back button on page side nav gos too)
    this.nav.setRoot(page.component);
    
  }
}



