import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import {Heroes} from '../Mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes = Heroes;
 
  constructor() {
  
   }

  ngOnInit() {
  }

}
