import { Component, Input, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-display-giphy',
  templateUrl: './display-giphy.component.html',
  styleUrls: ['./display-giphy.component.css']
})
export class DisplayGiphyComponent implements OnInit {
  @Input() giphy: any[];

  constructor() { }

  ngOnInit() {
    console.log('Initialized');
    console.log('::::' + this.giphy);
  }

}
