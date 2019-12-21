import{NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import{UbuntuinstalltionComponent} from './ubuntuinstalltion/ubuntuinstalltion.component';
import{UbuntuTutHomeComponent} from './ubuntu-tut-home/ubuntu-tut-home.component';
import{DetectingOpenportComponent} from './Tutorials/detecting-openport/detecting-openport.component';

const routes: Routes=[

    {path:'ubuntu-19.04-installation', component:UbuntuinstalltionComponent},
    {path:'ubuntu-tutorials', component:UbuntuTutHomeComponent},
    {path:'detecting-open-port-linux', component:DetectingOpenportComponent}
]

@NgModule({
    declarations:[UbuntuTutHomeComponent,UbuntuinstalltionComponent,DetectingOpenportComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class UbuntuModule{
    contructor(){
        console.log('ubuntu module loaded');
        
    }
}