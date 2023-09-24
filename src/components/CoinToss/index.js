// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    tossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {headsCount, tailsCount} = this.state

    let tossResultImage = ''
    let headstotal = headsCount
    let tailstotal = tailsCount

    if (tossResult === 0) {
      tossResultImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      headstotal += 1
    } else {
      tossResultImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      tailstotal += 1
    }

    this.setState({
      tossImage: tossResultImage,
      headsCount: headstotal,
      tailsCount: tailstotal,
    })
  }

  render() {
    const {headsCount, tailsCount, tossImage} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="container">
        <div className="card-cont">
          <h1 className="heading">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="head" />
          <button type="button" className="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="result">
            <p className="para">Total: {total}</p>
            <p className="para">Heads: {headsCount}</p>
            <p className="para">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
