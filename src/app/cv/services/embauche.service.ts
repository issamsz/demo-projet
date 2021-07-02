import { Injectable } from '@angular/core';
import { Person } from 'src/app/models/Person';
import swall from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
private embauchees: Person[] = [];
  constructor() { }

  getEmbauchees(): Person[] {
    return this.embauchees;
  }
  embaucher(personne: Person) {
    const index = this.embauchees.indexOf(personne);
    if (index === -1) {
      this.embauchees.push(personne);
    } else {
      swall.fire(`${personne.firstname} ${personne.name} est déja selectionnée`,'', 'error');
    }
  }
}
