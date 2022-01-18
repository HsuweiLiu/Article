import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get author() {
    return environment.author;
  }

  get mail() {
    return environment.mail;
  }

  get linkedin() {
    return environment.linkedin;
  }

  ngOnInit(): void {

  }
}
