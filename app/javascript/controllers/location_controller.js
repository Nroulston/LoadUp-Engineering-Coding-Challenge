import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  click() {
    navigator.geolocation.getCurrentPosition(this.success)
  }

  success(position) {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
  }
}
