import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 

import{AboutusComponent} from './aboutus/aboutus.component';
import{FeedbackComponent} from './feedback/feedback.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes=[

{path:'aboutus', component:AboutusComponent},
{path:'feedback', component:FeedbackComponent}

]
@NgModule({
  declarations: [AboutusComponent, FeedbackComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})


export class LazymoduleModule {

  constructor(){
    console.log('module loaded');
  }
 }
