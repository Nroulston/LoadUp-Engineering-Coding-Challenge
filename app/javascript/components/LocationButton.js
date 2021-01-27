import React from "react"
import PropTypes from "prop-types"
// class LocationButton extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//          <button data-action='click->location#click'>Current Weather</button>
//       </React.Fragment>
//     );
//   }
// }


// export default LocationButton


export default function LocationButton(){
  return (
    <>
    <button data-action='click->location#click'>Current Weather</button>
    </>
  )
}