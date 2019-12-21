import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {InstallnodejsubuntuComponent} from './nodejs/installnodejsubuntu/installnodejsubuntu.component';
 
const routes: Routes = [

  {path : '', component: HomeComponent, pathMatch:'full'},
 
  {path:'', loadChildren: './lazymodule/lazymodule.module#LazymoduleModule'},

  {path:'',loadChildren: './ubuntu/ubuntu.module#UbuntuModule'},
  
  {path: 'nodejs_installation', component: InstallnodejsubuntuComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
