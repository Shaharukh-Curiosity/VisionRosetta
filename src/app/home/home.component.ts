import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {Meta, Title} from '@angular/platform-browser';
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e

import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

<<<<<<< HEAD
  constructor(private router: Router  ) { }

  ngOnInit() {


  }


=======
  constructor(private router: Router, private meta: Meta, private titleservice: Title) { }

  ngOnInit() {
    this.titleservice.setTitle('Vision Rosetta'); 
    this.meta.addTag({
      name: 'tech-blog',
      content: 'this blog has been created for tech savvy to boost their performance'
    });
 
  }
 
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
}
