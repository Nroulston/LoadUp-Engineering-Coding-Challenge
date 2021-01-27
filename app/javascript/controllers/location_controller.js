import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]
  
  click() {
    navigator.geolocation.getCurrentPosition(this.success)
  }
  
  success(position) {
   console.log(position.coords.latitude)
   console.log(position.coords.longitude)
   fetch(`https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`)
      .then(response => response.json())
      .then(data => {
        fetch(`https://api.weather.gov/gridpoints/${data.properties.gridId}/${data.properties.gridX},${data.properties.gridY}/forecast`)
          .then(response => {
             
           })
          
      })
          

    
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
