import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import {MatCardModule, MatInputModule, MatButtonModule, MatRadioModule, MatSnackBarModule,
<<<<<<< HEAD
   MatGridListModule, MatFormFieldModule, MatCheckboxModule, MatDialogModule,MatMenuModule, MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {SocialLoginModule, AuthServiceConfig, LoginOpt} from 'angularx-social-login';
import {GoogleLoginProvider , FacebookLoginProvider} from 'angularx-social-login';
import { FooterComponent } from './footer/footer.component';
import {OnlinePreparationComponent} from './portfolio/online-preparation/online-preparation.component';
import { PortfolioHomeComponent } from './portfolio/portfolio-home/portfolio-home.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { Angular7Component } from './post/angular7/angular7.component';
import {LoginComponent} from './login/login.component';
import {PasswordrecoveryComponent} from './passwordrecovery/passwordrecovery.component';
import {UserinformComponent} from './post/userinform/userinform.component';
import { SupportComponent } from './support/support.component';
import { PublicqComponent } from './publicq/publicq.component';
import {JwtvalidInterceptor} from './jwtvalid.interceptor';
import {PasswordsetComponent} from './passwordset/passwordset.component';
import { NmapComponent } from './home_files/nmap/nmap.component';
import { UbuntuinstalltionComponent } from './ubuntu/ubuntuinstalltion/ubuntuinstalltion.component';
const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
};

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1079761155589-h5j5t4nm10gh82kieqkg0oqv6sllmja6.apps.googleusercontent.com', googleLoginOptions)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2357747017793877')
  }
]);


export function ProvideConfig(){
  return config;
}
=======
   MatGridListModule, MatFormFieldModule, MatCheckboxModule, MatDialogModule, MatMenuModule, MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {OnlinePreparationComponent} from './portfolio/online-preparation/online-preparation.component';
import { PortfolioHomeComponent } from './portfolio/portfolio-home/portfolio-home.component';
import { ErrorComponent } from './error/error.component'; 


import { SupportComponent } from './support/support.component'; 
import { NmapComponent } from './home_files/nmap/nmap.component';
import { UbuntuinstalltionComponent } from './ubuntu/ubuntuinstalltion/ubuntuinstalltion.component';
import { InstallnodejsubuntuComponent } from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import { OpensshComponent } from './home_files/openssh/openssh.component';
import { PrivacyComponent } from './privacy/privacy/privacy.component';
import { PuttyComponent } from './home_files/putty/putty.component';
import {ScrolltopService} from './scrolltop.service';
 
 
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    OnlinePreparationComponent,
    PortfolioHomeComponent,
    ErrorComponent,
<<<<<<< HEAD
    RegisterComponent,
    Angular7Component,
    LoginComponent,
    PasswordrecoveryComponent,
    UserinformComponent,
    SupportComponent,
    PublicqComponent,
    PasswordsetComponent,
    NmapComponent,
    UbuntuinstalltionComponent
=======
    SupportComponent,
    NmapComponent,
    UbuntuinstalltionComponent,
    InstallnodejsubuntuComponent,
    OpensshComponent,
    PrivacyComponent,
    PuttyComponent
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e



  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
=======
    BrowserModule.withServerTransition({appId: 'my-app'}),
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
<<<<<<< HEAD
    CountdownModule,
=======
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
    MatGridListModule,
    HttpClientModule,
    MatRadioModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
<<<<<<< HEAD
    MatSnackBarModule,
    SocialLoginModule,
    ToastrModule.forRoot({timeOut: 4000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,})
=======
    MatSnackBarModule
 
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e



  ],
  providers: [
<<<<<<< HEAD
    {
      provide: AuthServiceConfig,
      useFactory: ProvideConfig
    } ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtvalidInterceptor,
      multi: true
    }
=======
    ScrolltopService
     
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
