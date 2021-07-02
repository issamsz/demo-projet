import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import { CvService } from '../services/cv.service';
import swall from 'sweetalert2';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
 personne : Person
  constructor(
    private activatedRoute : ActivatedRoute,
    private CvService : CvService,
    private router : Router,
  ) {

  }

  ngOnInit(): void {

    const target = document.querySelector('.tw');
    const writer1 = new Typewriter(target, {
      typeSpeed: 80,
      typeColor: 'aliceblue'
    })

    const writer2 = new Typewriter(target, {
      typeSpeed: 80,
      typeColor: '#d83971'
    })

    writer1
      .type('TROUVER CHER NOUS : ')
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start()

    writer2
      .type("MUSCULATION HOMMES")
      .rest(500)
      .clear()
      .changeTypeColor('#d83971')
      .type("MUSCULATION FEMMES")
      .rest(500)
      .clear()
      .changeTypeColor('#d83971')
      .type("FITNESS")
      .rest(500)
      .clear()
      .changeTypeColor('#d83971')
      .type("YOGA")
      .rest(500)
      .clear()
      .changeTypeColor('#d83971')
      .then(writer1.start.bind(writer1))


    this.activatedRoute.params.subscribe(
      (params) => {

       this.personne = this.CvService.getPersonneById(params.id);
       if (!this.personne){
         const LINK = ['cv'];
         this.router.navigate(LINK);
         swall.fire(`Le ID ${params.id}  est Introuvable`,'', 'error');
       }

  }
    );

}


}
