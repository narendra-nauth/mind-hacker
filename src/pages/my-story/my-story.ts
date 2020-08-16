import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyStoryAddPage } from '../my-story-add/my-story-add'
import { MyStoryDetailPage } from '../my-story-detail/my-story-detail';

import { StoryProvider } from '../../providers/story/story';

@IonicPage()
@Component({
  selector: 'page-my-story',
  templateUrl: 'my-story.html',
})
export class MyStoryPage {
  stories: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storyProvider: StoryProvider) {
    this.storyProvider.getStories().subscribe(
      data => {
        this.stories = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addStory(){
    this.navCtrl.push(MyStoryAddPage);
  }

  viewStory(story_id, story_title, story_body, story_date){
    this.navCtrl.push(MyStoryDetailPage, {
      story: {
        id: story_id,
        title: story_title,
        body: story_body,
        date: story_date
      }
    });
  }
}
