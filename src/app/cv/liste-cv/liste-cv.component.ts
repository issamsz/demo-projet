import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {
@Output() sendDetail = new EventEmitter();
personnes : Person[];
@Input() personne:Person;

constructor(
    private cvservice : CvService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.personnes = this.cvservice.getPersonne();

  }

  detail(personne : Person ){
this.sendDetail.emit(personne);
  }




}

