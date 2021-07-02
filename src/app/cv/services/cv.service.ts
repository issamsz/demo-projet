import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Person} from '../../models/Person';

@Injectable({
  providedIn: 'root'
})
export class CvService {

private personnes: Person[];

  constructor() {
this.personnes = [
  new Person ( 1, 'benlalam', 'Issam', 36, 77777, 'student', 'issam.jpg'),
  new Person(2, 'F-Name1', 'Name1', 4, 5555, 'san', ''),
  new Person(3, 'F-Name2', 'Name2', 31, 11111, 'wife', ''),
  new Person(4, 'F-Name3', 'Name3', 30, 11111, 'sister', '')

];
  }

  getPersonne(): Person[] {
    return this.personnes;
  }


  push(personne: Person) {

      this.personnes.push(personne);

  }

  getPersonneById(id) : Person {
    return this.personnes.find(
      (personne) => personne.id === +id
    );
  }


}
