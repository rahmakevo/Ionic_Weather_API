import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any;
  location : {
    city : string,
    country : string
  }
  weather: any;
  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage
  ) {

  }

  ionViewWillEnter() {
    this.storage.get('location').then((val) => {
      if(val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Nairobi',
          country: "Kenya"
        }
      }
      this.weatherProvider.getWeather(this.location.city).subscribe(data => {
        this.data = data;
        this.weather = data.weather[0];
      });

    });

  }

}
