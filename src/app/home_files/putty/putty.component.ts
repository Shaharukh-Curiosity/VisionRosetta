import { Component, OnInit } from '@angular/core';

import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-putty',
  templateUrl: './putty.component.html',
  styleUrls: ['./putty.component.css']
})
export class PuttyComponent implements OnInit {

  constructor(private meta: Meta, private titleservice: Title) {

   }

  ngOnInit() {
    

    this.titleservice.setTitle('Putty Windows');
    this.meta.addTag({
      name: 'putty',
      content: 'in this article we have talked about using of putty on windows along with SSH Login to establish connection with remote '
    });
  }

}
