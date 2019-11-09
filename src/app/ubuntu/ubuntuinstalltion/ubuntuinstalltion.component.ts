import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import {Meta, Title} from '@angular/platform-browser';
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
@Component({
  selector: 'app-ubuntuinstalltion',
  templateUrl: './ubuntuinstalltion.component.html',
  styleUrls: ['./ubuntuinstalltion.component.css']
})
export class UbuntuinstalltionComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  constructor( private meta: Meta, private titleservice: Title) { }

  ngOnInit() {
    this.titleservice.setTitle('Ubuntu Installation');
    this.meta.addTag({
      name: 'ubuntu',
      content: 'here we were provided ubuntu 1.04 installation tutorials from scratch'
    });
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
  }

}
