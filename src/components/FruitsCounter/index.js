// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state

    return (
      <div className="Fruit-app-container">
        <div className="fruit-container ">
          <h1 className="Heading">
            Bob ate <span className="count-color">{mango} </span> mangoes
            <span className="count-color"> {banana} </span>bananas
          </h1>
          <div className="sub-fruit-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div className="top-button">
                <button
                  type="button"
                  className="center-button"
                  onClick={this.onMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div className="top-button">
                <button
                  type="button"
                  className="center-button"
                  onClick={this.onBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
