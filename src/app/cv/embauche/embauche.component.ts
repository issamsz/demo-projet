import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

embauchees: Person[];
  constructor(
    private embaucheService: EmbaucheService
  ) { }

  ngOnInit(): void {
    this.embauchees = this.embaucheService.getEmbauchees();
  }


}
