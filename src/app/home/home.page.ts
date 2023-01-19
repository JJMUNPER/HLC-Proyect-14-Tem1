import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  animal: any;
  // variable filtro
  filtro: string='';


  constructor(private httpClient: HttpClient) {

    this.animal = this.httpClient.get('https://raw.githubusercontent.com/JJMUNPER/HLC-Proyect-14-Tem1/master/MOCK.json');
  }

}
