import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
@Component({
  selector: 'app-nmap',
  templateUrl: './nmap.component.html',
  styleUrls: ['./nmap.component.css']
})
export class NmapComponent implements OnInit {

 

  constructor(private meta: Meta, private titleservice: Title) { }

  ngOnInit() {

    this.titleservice.setTitle('Nmap Windows');
    this.meta.addTag({
      name: 'nmap',
      content: 'how to install nmap on windows '
    });


  }

}
