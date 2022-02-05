import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather, MainCondition, WeatherDetail } from './weather.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngWeather';

  mainCond !: MainCondition ;
  weatherDetail !: WeatherDetail;
  // a:Weather = {name:"",id:"",mainTemp: this.mainCond, weatherDetail:this.weatherDetail };
  retrieveInfo = <Weather>{}

  constructor (private weatherSvc: WeatherService){ }

  ngOnInit(){

  }


  getWeather(form:NgForm){
    console.log(form);
    const city = form.value.city;
    const keymem = form.value.apikey;
    this.weatherSvc.getWeather(city,form.value.apikey)
      .subscribe( resp => {
        console.log(resp)
        this.retrieveInfo = <Weather>resp
        console.log(this.retrieveInfo)
      });
    // form.reset();
    form.controls["city"].reset();
  }
}
