import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animal: any;


  constructor(private httpClient: HttpClient) {

    this.animal = this.httpClient.get('https://randomuser.me/api?results=100').pipe(map(res => res['results']))
  }

}
