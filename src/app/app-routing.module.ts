import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { OnlinePreparationComponent } from './portfolio/online-preparation/online-preparation.component';
import {PortfolioHomeComponent} from './portfolio/portfolio-home/portfolio-home.component';
import {ErrorComponent} from './error/error.component'; 
import {SupportComponent} from './support/support.component';
import {UbuntuinstalltionComponent} from './ubuntu/ubuntuinstalltion/ubuntuinstalltion.component';
import {NmapComponent} from './home_files/nmap/nmap.component';
import {InstallnodejsubuntuComponent} from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import {OpensshComponent} from './home_files/openssh/openssh.component';
import {PrivacyComponent} from './privacy/privacy/privacy.component';
import {PuttyComponent } from './home_files/putty/putty.component';

const routes: Routes = [

  {path : '', component: HomeComponent},

  {path: 'portfolio', component: PortfolioHomeComponent},
 
  {path: 'portfolio/online-preparation', component: OnlinePreparationComponent},
  
  {path: 'support', component: SupportComponent},

  {path: 'nmap', component: NmapComponent},

  {path: 'ubuntu_installation', component: UbuntuinstalltionComponent},

  {path: 'portfolio/online-preparation', component: OnlinePreparationComponent},
 
  {path: 'nmap', component: NmapComponent},

  {path: 'ubuntu_installation-19-04', component: UbuntuinstalltionComponent},

  {path: 'nodejs_installation', component: InstallnodejsubuntuComponent},

  {path: 'openssh', component: OpensshComponent},

  {path: 'privacy', component: PrivacyComponent},

  {path: 'putty', component: PuttyComponent},

  {path: '**', component: ErrorComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
