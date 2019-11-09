import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {ScrolltopService} from '../../scrolltop.service';
import {Meta, Title} from '@angular/platform-browser';
>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e

@Component({
  selector: 'app-nmap',
  templateUrl: './nmap.component.html',
  styleUrls: ['./nmap.component.css']
})
export class NmapComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  constructor(private scrolltop: ScrolltopService, private meta: Meta, private titleservice: Title) { }

  ngOnInit() {
    this.scrolltop.setScrollTop();

    this.titleservice.setTitle('Nmap Windows');
    this.meta.addTag({
      name: 'nmap',
      content: 'how to install nmap on windows '
    });

>>>>>>> dc7ca8caa9759d4a9def25682707f917f8e9a75e
  }

}
