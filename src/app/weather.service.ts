import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Weather } from "./weather.model";
import { catchError, lastValueFrom, map, of, throwError } from "rxjs";


@Injectable()
export class WeatherService{

  constructor(private http : HttpClient){}

  getWeather(city:string,key:string){

    const URL = "http://api.openweathermap.org/data/2.5/weather";
    const params = new HttpParams()
      .set("q",city)
      .set("appid",key)
      .set("units", "metric")

    return this.http.get<Weather>(URL,{params:params})
      .pipe(
        map( resp => {
          console.log(resp)
          return {
            name:resp.name,
            id:resp.id,
            mainTemp:(<any>resp).main,
            weatherDetail: (<any>resp).weather[0]
          }
        } ),
        catchError( (error) =>{
          console.log(error)
          return throwError( () => new Error("error in pipe map"))
          // return of([])
        } )
      )
  }
}
