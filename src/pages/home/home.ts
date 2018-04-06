import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any;
  location : {
    city : string;
  }

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter() {
    this.location = {
      city: 'Miami'
    }
    this.weatherProvider.getWeather(this.location.city)
    .subscribe(weather => {
      console.log(weather);
      this.weather = weather.Object;  
    });
  }

}
