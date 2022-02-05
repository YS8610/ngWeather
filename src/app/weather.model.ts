export interface Weather {
  name: string;
  id: string;
  mainTemp : MainCondition
  weatherDetail : WeatherDetail
  }

export interface MainCondition{
  feels_like : number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface WeatherDetail{
  description: string;
  icon: string;
  id: number;
  main: string;
}
