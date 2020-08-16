import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StoryProvider {
  story_url: any;

  constructor(public http: HttpClient) {
    this.story_url = "../../assets/stories/stories.json";
  }

  getStories(){
    return this.http.get(`${this.story_url}`);
  }
}
