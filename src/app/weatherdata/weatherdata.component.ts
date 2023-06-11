import { Component , OnInit} from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weatherdata',
  templateUrl: './weatherdata.component.html',
  styleUrls: ['./weatherdata.component.css']
})
export class WeatherdataComponent {
  weather:any;
  temperature:number=0;
  pressure: number=0;
  wind: number =0;
  humidity: number= 0;
  city:string='islamabad';
  units: string='imperial';
  constructor(private weatherserive : WeatherService){
  
  }
  ngOnInit(){
    
    
  }
  private getweatherdata( city:string, unit:string){
    this.weatherserive.getdata(this.city,this.units).subscribe({

      next: (result)=>{
        this.weather=result;
        console.log(this.weather)
        this.temperature= this.weather.main.temp;
        this.pressure=this.weather.main.pressure;
        this.humidity= this.weather.main.humidity;
        this.wind= this.weather.wind.speed;
        this.city=this.weather.sys[2].name;
      },
      error: (error)=> console.log(error.message),
      complete: ()=> console.info ('api completed')
    })
  }
  
  onSubmit(){
    this.getweatherdata(this.city,this.units);
    
  }
}
