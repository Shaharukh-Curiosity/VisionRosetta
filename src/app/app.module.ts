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
import { SupportComponent } from './support/support.component';
import {JwtvalidInterceptor} from './jwtvalid.interceptor';
import { NmapComponent } from './home_files/nmap/nmap.component';
import { FooterComponent } from './footer/footer.component';   
import { HomeComponent } from './home/home.component';
import { UbuntuinstalltionComponent } from './ubuntu/ubuntuinstalltion/ubuntuinstalltion.component';
import { InstallnodejsubuntuComponent } from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import { OpensshComponent } from './home_files/openssh/openssh.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PuttyComponent } from './home_files/putty/putty.component';
import {ScrolltopService} from './scrolltop.service';
import{SitemapComponent} from './sitemap/sitemap.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TutListComponent } from './ubuntu/Tutorials/tut-list/tut-list.component';
import { DetectingOpenportComponent } from './ubuntu/Tutorials/detecting-openport/detecting-openport.component';
import { UbuntuTutHomeComponent } from './ubuntu/ubuntu-tut-home/ubuntu-tut-home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    OnlinePreparationComponent,
    PortfolioHomeComponent,
    ErrorComponent,
    SupportComponent,
    NmapComponent,
    UbuntuinstalltionComponent,
    SupportComponent,
    NmapComponent,
    UbuntuinstalltionComponent,
    InstallnodejsubuntuComponent,
    OpensshComponent,
    PrivacyComponent,
    PuttyComponent,
    SitemapComponent,
    AboutusComponent,
    FeedbackComponent,
    TutListComponent,
    DetectingOpenportComponent,
    UbuntuTutHomeComponent

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
