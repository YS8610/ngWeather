import { Component, OnDestroy, OnInit } from '@angular/core';
import { Weather, MainCondition, WeatherDetail } from '../weather.model';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  hasError = false;
  mainCond !: MainCondition ;
  weatherDetail !: WeatherDetail;
  // a:Weather = {name:"",id:"",mainTemp: this.mainCond, weatherDetail:this.weatherDetail };
  retrieveInfo = <Weather>{}
  listofCity : {api:string, city:string}[] = [];

  constructor(private weatherSvc:WeatherService) { }

  ngOnInit(): void {
    this.listofCity = this.weatherSvc.getListofCities();
  }

  addCity(form:NgForm){
    let isDuplicate = false;
    const city = {api : form.value.apikey, city : form.value.city }
    for ( let c of this.listofCity){
      if ( (c.city).trim().toLowerCase() == (form.value.city).trim().toLowerCase() ) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate){
      this.listofCity.push(city);
    }
    form.controls["city"].reset();
  }

  ngOnDestroy(): void {
    this.weatherSvc.setListofCities(this.listofCity);
  }

}
