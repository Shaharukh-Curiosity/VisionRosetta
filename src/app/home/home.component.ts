import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  
  constructor(private router: Router, private meta: Meta, private titleservice: Title) { }

  ngOnInit() {
    this.titleservice.setTitle('Vision Rosetta'); 
    this.meta.addTag({
      name: 'tech-blog',
      content: 'this blog has been created for tech savvy to boost their performance'
    });
 
  }
 

}
