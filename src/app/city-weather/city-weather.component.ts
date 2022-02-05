import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../weather.model';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  @Input() weatherinCity = <Weather>{};

  constructor() { }


  ngOnInit(): void {
  }


}
