import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { OnlinePreparationComponent } from './portfolio/online-preparation/online-preparation.component';
import {PortfolioHomeComponent} from './portfolio/portfolio-home/portfolio-home.component';
import {ErrorComponent} from './error/error.component'; 
import {UbuntuinstalltionComponent} from './ubuntu/ubuntuinstalltion/ubuntuinstalltion.component';
import {NmapComponent} from './home_files/nmap/nmap.component';
import {InstallnodejsubuntuComponent} from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import {OpensshComponent} from './home_files/openssh/openssh.component';
import {PrivacyComponent} from  './privacy/privacy.component';
import {PuttyComponent } from './home_files/putty/putty.component';
import{SitemapComponent} from './sitemap/sitemap.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import{FeedbackComponent} from './feedback/feedback.component'; 
import{DetectingOpenportComponent} from './ubuntu/Tutorials/detecting-openport/detecting-openport.component';
import{UbuntuTutHomeComponent } from './ubuntu/ubuntu-tut-home/ubuntu-tut-home.component';

const routes: Routes = [

  {path : '', component: HomeComponent},

  {path: 'portfolio', component: PortfolioHomeComponent},
 
  {path: 'portfolio/online-preparation', component: OnlinePreparationComponent},
  
  {path: 'nmap', component: NmapComponent},

  {path: 'ubuntu_installation', component: UbuntuinstalltionComponent},

  {path: 'portfolio/online-preparation', component: OnlinePreparationComponent},
 
  {path: 'nmap', component: NmapComponent},

  {path: 'ubuntu-installation-19-04', component: UbuntuinstalltionComponent},

  {path: 'nodejs_installation', component: InstallnodejsubuntuComponent},

  {path: 'openssh', component: OpensshComponent},

  {path: 'privacy', component: PrivacyComponent},

  {path: 'putty', component: PuttyComponent},

  {path: 'sitemap', component: SitemapComponent},

  {path:'aboutus', component:AboutusComponent},

  {path:'feedback', component:FeedbackComponent},
 
  {path:'detecting-open-port', component:DetectingOpenportComponent},

  {path:'ubuntu_tutorials', component:UbuntuTutHomeComponent },

  {path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
