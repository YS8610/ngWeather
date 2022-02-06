import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  weatherinCity = <Weather>{};
  hasError = false;


  constructor(
    private weatherSvc:WeatherService,
    private route: ActivatedRoute,
    private router:Router
    ) { }


  ngOnInit(): void {
      let api = this.route.snapshot.params["apikey"];
      let city = this.route.snapshot.params["city"];

      this.weatherSvc.getWeather(city,api)
        .subscribe( {
          next : (resp) => {
            this.hasError = false;
            this.weatherinCity = <Weather>resp
            // console.log(this.retrieveInfo)
          },
          error: (error) =>{
            console.log(error);
            // this.retrieveInfo = <Weather>{};
            this.hasError = true;
          }
        } );
  }

  onBack(){
    this.router.navigate(["/"]);
  }
}
