import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  today: Date;
  minDate: Date;
  maxDate: Date;
  constructor(
  ) { 
    let today = new Date();
    this.today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30);
    this.minDate = new Date(today.getFullYear(), 0, 1);
    this.maxDate = new Date(today.getFullYear(), 11, 31);
  }
  

  ngOnInit() {
  }

}
