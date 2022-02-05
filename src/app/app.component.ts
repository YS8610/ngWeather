import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather, MainCondition, WeatherDetail } from './weather.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngWeather';

  hasError = false;
  mainCond !: MainCondition ;
  weatherDetail !: WeatherDetail;
  // a:Weather = {name:"",id:"",mainTemp: this.mainCond, weatherDetail:this.weatherDetail };
  retrieveInfo = <Weather>{}

  constructor (private weatherSvc: WeatherService) { }


  ngOnInit(){

  }

  getWeather(form:NgForm){
    // console.log(form);
    const city = form.value.city;
    const keymem = form.value.apikey;
    this.weatherSvc.getWeather(city,form.value.apikey)
      .subscribe( {
        next : (resp) => {
          this.hasError = false;
          this.retrieveInfo = <Weather>resp
          // console.log(this.retrieveInfo)
        },
        error: (error) =>{
          console.log(error);
          // this.retrieveInfo = <Weather>{};
          this.hasError = true;
        }
      } );
    form.controls["city"].reset();
  }
}
