import { Controller } from "stimulus";
import axios from 'axios'

export default class extends Controller {
  static targets = [ "output" ]

  click() {
     navigator.geolocation.getCurrentPosition(this.success)
    
  }
  
  async success(position) {
   
   let response = await fetch(`https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`)
   let data = await response.json()   

   let weather_response = await fetch(`https://api.weather.gov/gridpoints/${data.properties.gridId}/${data.properties.gridX},${data.properties.gridY}/forecast`)
   let forecast = await weather_response.json()
   debugger
   
  }

  
  
  //async setPosition(position) {
    //   try {
  //     let grid = await fetch(`https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`)
  //     debugger
  //   }
  //   catch(e) {
  //     console.log(e)
  //   }
  // }
}
