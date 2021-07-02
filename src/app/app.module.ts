import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RegisterComponent} from './modules/register/register.component';
import {LoginComponent} from './modules/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {UsersComponent} from './modules/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {UserDetailsComponent} from './modules/user-details/user-details.component';
import {MatIconModule} from '@angular/material/icon';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { ListeCvComponent } from './cv/liste-cv/liste-cv.component';
import { TodoComponent } from './todo/todo.component';
import {MatTableModule} from '@angular/material/table';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { DetaillCvComponent } from './cv/detaill-cv/detaill-cv.component';
import { CvComponent } from './cv/cv/cv.component';
import { ImgPipe } from './pipes/img.pipe';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './menu/menu.component';
import { RouterComponent } from './router/router.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NosServiceComponent } from './cv/nos-service/nos-service.component';
import { AccuilComponent } from './projet/accuil/accuil.component';
import { FooterComponent } from './projet/footer/footer.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    UserDetailsComponent,
    ListeCvComponent,
    TodoComponent,
    EmbaucheComponent,
    DetaillCvComponent,
    CvComponent,
    ImgPipe,
    MenuComponent,
    RouterComponent,
    DetailCvComponent,
    NosServiceComponent,
    AccuilComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
