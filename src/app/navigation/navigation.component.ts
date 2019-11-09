import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';


=======
import { Observable } from 'rxjs'; 
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

   isCollapsed = true;

  isLoggedIn$: Observable<boolean>;

  constructor() { }

  toggle_bar(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {

<<<<<<< HEAD
=======

>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
  }




}
