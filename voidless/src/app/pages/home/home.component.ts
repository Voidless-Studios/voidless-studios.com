import { Component, OnInit } from '@angular/core';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.4
    });
  }

}
