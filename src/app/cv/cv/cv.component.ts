import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  pers : any;
  constructor() { }
  ngOnInit(): void {
  }

  treatInfo(data){
 return this.pers = data;
  }





}
