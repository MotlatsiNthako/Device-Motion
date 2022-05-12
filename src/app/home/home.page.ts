import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion/ngx';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { access } from 'fs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  x: string;
  y: string;
  z: string;
  timestamp: string;
  id: any;

  constructor( public navCtrl: NavController, public deviceMotion: DeviceMotion ) {
    this.x='_';
    this.y='_';
    this.z='_';
    this.timestamp= '_';
  }
  start()
  {
    try{
      const optoion: DeviceMotionAccelerometerOptions=
      {
        frequency: 200

      };
      this.id = this.deviceMotion.watchAcceleration(optoion).subscribe((acc: DeviceMotionAccelerationData)=>
      {
        this.x = ''+ acc.x;
        this.y = ''+ acc.y;
        this.z = ''+ acc.z;
        this.timestamp = ''+ acc.timestamp;
      });
    }catch(err)

    {
      alert('Error' + err);

    }
}
stop()
{
  this.id.unsubscribe();
}
}
