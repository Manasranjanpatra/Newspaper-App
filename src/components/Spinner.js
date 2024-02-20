import React, { Component } from 'react'
import Loading from './Loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src= {Loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
