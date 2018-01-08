import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  url = environment.apiUrl;
  key = environment.apiKey;
  giphies: any[];


  constructor(public http: Http) {
    // this.http = http;
  }

  ngOnInit() {
  }

  performSearch(searchterm: HTMLInputElement): void {
    const apiUrl = this.url + this.key + '&q=' + searchterm.value;

    this.http.get(apiUrl)
    .subscribe((res: Response) => {
      this.giphies = res.json().data;
      console.log(this.giphies);
    });

  }
}
