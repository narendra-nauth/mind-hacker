import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CounselingPage } from '../pages/counseling/counseling';
import { MyStoryPage } from '../pages/my-story/my-story';
import { VideosPage } from '../pages/videos/videos';
import { MyStoryAddPage } from '../pages/my-story-add/my-story-add';
import { MyStoryDetailPage } from '../pages/my-story-detail/my-story-detail';
import { StoryProvider } from '../providers/story/story';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    MyStoryAddPage,
    MyStoryDetailPage,
    ContactPage,
    CounselingPage,
    MyStoryPage,
    VideosPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyStoryAddPage,
    MyStoryDetailPage,
    ContactPage,
    CounselingPage,
    MyStoryPage,
    VideosPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoryProvider
  ]
})
export class AppModule {}
