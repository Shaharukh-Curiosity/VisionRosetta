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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {OnlinePreparationComponent} from './portfolio/online-preparation/online-preparation.component';
import { PortfolioHomeComponent } from './portfolio/portfolio-home/portfolio-home.component';
import { ErrorComponent } from './error/error.component';
import {JwtvalidInterceptor} from './jwtvalid.interceptor';
import { NmapComponent } from './home_files/nmap/nmap.component';
import { FooterComponent } from './footer/footer.component';   
import { HomeComponent } from './home/home.component';

import { InstallnodejsubuntuComponent } from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import { OpensshComponent } from './home_files/openssh/openssh.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PuttyComponent } from './home_files/putty/putty.component';
import {ScrolltopService} from './scrolltop.service';
import{SitemapComponent} from './sitemap/sitemap.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    OnlinePreparationComponent,
    PortfolioHomeComponent,
    ErrorComponent,
    NmapComponent, 
    NmapComponent, 
    InstallnodejsubuntuComponent,
    OpensshComponent,
    PrivacyComponent,
    PuttyComponent,
    SitemapComponent,  

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
    HttpClientModule,
    MatRadioModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtvalidInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
