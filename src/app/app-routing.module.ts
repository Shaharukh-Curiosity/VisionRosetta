import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { OnlinePreparationComponent } from './portfolio/online-preparation/online-preparation.component';
import {PortfolioHomeComponent} from './portfolio/portfolio-home/portfolio-home.component';
import {ErrorComponent} from './error/error.component'; 
import {NmapComponent} from './home_files/nmap/nmap.component';
import {InstallnodejsubuntuComponent} from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
import {PrivacyComponent} from  './privacy/privacy.component';
import{SitemapComponent} from './sitemap/sitemap.component';
const routes: Routes = [

  {path : '', component: HomeComponent, pathMatch:'full'},
 
  {path:'', loadChildren: './lazymodule/lazymodule.module#LazymoduleModule'},

  {path:'',loadChildren: './ubuntu/ubuntu.module#UbuntuModule'},
 
  {path: 'portfolio', component: PortfolioHomeComponent},
 
  {path: 'portfolio/online-preparation', component: OnlinePreparationComponent},
  
  {path: 'nmap', component: NmapComponent},
 

  {path: 'portfolio/online-preparation', component: OnlinePreparationComponent},
 
  {path: 'nmap', component: NmapComponent},
 

  {path: 'nodejs_installation', component: InstallnodejsubuntuComponent},
 

  {path: 'privacy', component: PrivacyComponent},
 

  {path: 'sitemap', component: SitemapComponent}, 
 

  {path:'**',component:ErrorComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
