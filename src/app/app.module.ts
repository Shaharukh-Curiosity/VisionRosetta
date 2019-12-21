import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatCardModule, MatInputModule, MatButtonModule, MatRadioModule, MatSnackBarModule,
   MatGridListModule, MatFormFieldModule, MatCheckboxModule, MatDialogModule,MatMenuModule, MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'; 
import { FooterComponent } from './footer/footer.component';   
import { HomeComponent } from './home/home.component';
import { InstallnodejsubuntuComponent } from './nodejs/installnodejsubuntu/installnodejsubuntu.component';

import {ScrolltopService} from './scrolltop.service'; 


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent, 
    InstallnodejsubuntuComponent

  ],
  imports: [
    BrowserModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,
    MatRadioModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
