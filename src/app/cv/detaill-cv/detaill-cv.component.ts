import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detaill-cv',
  templateUrl: './detaill-cv.component.html',
  styleUrls: ['./detaill-cv.component.css']
})
export class DetaillCvComponent implements OnInit {

@Input() personne: Person;
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {

    }

    addCV(){
    this.embaucheService.embaucher(this.personne);
    }
  }



