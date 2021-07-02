import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/Person';
import swall from 'sweetalert2';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-accuil',
  templateUrl: './accuil.component.html',
  styleUrls: ['./accuil.component.css']
})
export class AccuilComponent implements OnInit {

  personne : Person
  constructor(
    private activatedRoute : ActivatedRoute,
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




}
}
