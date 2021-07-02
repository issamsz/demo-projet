import { Component, OnInit, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import swall from 'sweetalert2';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  tentative = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  aller(){
    const todo = ['todo'];
    const cv = ['cv'];
    if (this.tentative === 'todo'){
      this.router.navigate(todo);
      Swal.fire({
        text: 'Route Todo est activer ',
        toast: true,
        position: 'top-right',
        icon : 'success',
        timer: 2000,
        showConfirmButton: false,
        width:'20%',
      })
    }else if (this.tentative === 'cv'){
      this.router.navigate(cv);
      Swal.fire({
        text: 'Route CV est activer ',
        toast: true,
        position: 'top-right',
        icon : 'success',
        timer: 2000,
        showConfirmButton: false,
        width:'20%',
      })
    }
    else if (this.tentative === 'router'){

      Swal.fire({
        text: 'Cest Votre Route Actuel ',
        toast: true,
        position: 'top-right',
        icon : 'error',
        timer: 2000,
        showConfirmButton: false,
        width:'20%',
      })

    }else{
      swall.fire(`${this.tentative}  est une Route qui néxiste pas`,'', 'error');


    }

  }

}


