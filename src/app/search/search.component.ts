import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GiphyDataService } from '../giphy-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  giphies: any[];
  giphyDataService: GiphyDataService;

  constructor(public http: Http, giphyDataService: GiphyDataService) {
    this.giphyDataService = giphyDataService;
  }

  ngOnInit() {
  }

  private searchForGiphy(searchTerm: HTMLInputElement): void {
    this.giphyDataService.performSearch(searchTerm)
    .subscribe(res => {
      this.handleData(res.json());
    });
  }

  handleData(res) {
    // console.log(res.data);
    this.giphies = res.data;
    console.log(this.giphies);
  }

  }

