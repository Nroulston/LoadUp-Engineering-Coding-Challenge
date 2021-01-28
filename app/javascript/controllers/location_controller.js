import { Controller } from "stimulus";
import axios from 'axios'

export default class extends Controller {
  static targets = [ "output" ]

  click() {
    navigator.geolocation.getCurrentPosition(async position => {
      
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=aeddc5e95e0b9587be35b483910c9bc1`)
      let data = await response.json()   
      const forecast = await axios("/weather", {params: { data } })
    
      this.outputTarget.innerHTML = forecast.data
    })
    
  }
  
  async success(position) {
   
   let response = await fetch(`https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`)
   let data = await response.json()   

   let weather_response = await fetch(`https://api.weather.gov/gridpoints/${data.properties.gridId}/${data.properties.gridX},${data.properties.gridY}/forecast`)
   let forecast_response = await weather_response.json()
   let forecast_periods = forecast_response.properties.periods 
   const forecast = await axios("/weather", {params: { forecast_periods } })
   
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
