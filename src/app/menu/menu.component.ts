import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../modules/login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  animal: string;
  name: string;

  constructor(private dialog: MatDialog) { }

  openCreat(){
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = true;
    DialogConfig.autoFocus = true;
    DialogConfig.width = "50%";
    DialogConfig.height = "45%";
    this.dialog.open(LoginComponent, DialogConfig);

  }




  ngOnInit(): void {
  }

}


