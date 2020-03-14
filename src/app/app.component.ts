import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as wijmo from 'wijmo/wijmo';
import 'wijmo/cultures/wijmo.culture.ja';
import * as data from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'Angular6App';
  products: any = (data as any).default;
  ngOnInit(){
    console.log(data);
  }
}
