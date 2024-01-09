/* eslint-disable import/newline-after-import */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
// Write your code here
import {Counter} from 'react'
import './index.css'
class ClickCounter extends Counter {
  state = {count: 0}

  clickMe = () => {
    console.log('button is clicked')
    this.setState(increment => ({
      count: increment.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading ">
          The Button has been Clicked <span className="count">{count}</span>{' '}
          Times.
        </h1>
        <p>click the button to increase the count</p>
        <div className="button-el">
          <button className="button" onClick={this.clickMe}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
