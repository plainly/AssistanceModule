import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { GroupsViewPage } from '../groups-view/groups-view';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GroupsViewPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
