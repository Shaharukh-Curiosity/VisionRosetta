import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import {HerokuService} from '../heroku.service';
import {RegisterService} from '../services/register.service';
=======
import {HerokuService} from '../heroku.service'; 
import {ScrolltopService} from '../scrolltop.service';
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router: Router, private heroku: HerokuService, private register: RegisterService) { }

  ngOnInit() {
=======
  constructor(private router: Router, private heroku: HerokuService, 
              private scrolltop: ScrolltopService) { }

  ngOnInit() {
    this.scrolltop.setScrollTop();
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
  }
  getResponse(){

    this.heroku.getData().subscribe((res) =>{
       console.log(res);
    }, (error => {
      console.log(error);
    }));
  }
  
  NavigateHomepage(){
    this.router.navigate(['']);
  }

  NavigateToContact(){
  this.router.navigate(['contact_us']);
  }
}
