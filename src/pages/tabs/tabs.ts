import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { CounselingPage } from '../counseling/counseling';
import { MyStoryPage } from '../my-story/my-story';
import { VideosPage } from '../videos/videos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyStoryPage;
  tab3Root = VideosPage;
  tab4Root = CounselingPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
