import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animal: any;


  constructor(private httpClient: HttpClient) {

    this.animal = this.httpClient.get('https://raw.githubusercontent.com/JJMUNPER/HLC-Proyect-14-Tem1/master/MOCK_DATA.json');
  }

}
