import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Injectable()
export class GiphyDataService {

  url = environment.apiUrl;
  key = environment.apiKey;
  giphies: any[];
  anotherData: any;

  constructor(public http: Http) { }

  performSearch(searchterm: HTMLInputElement) {
    const apiUrl = this.url + this.key + '&q=' + searchterm.value;

    return this.http.get(apiUrl);
    // .subscribe((res: Response) => {
    //   this.giphies = res.json();
    //   console.log(this.giphies);
    // });

    // return this.http.get(apiUrl);
    // return this.giphies;
    // return this.http.get(apiUrl);
  }




}
