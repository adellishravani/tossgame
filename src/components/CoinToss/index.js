import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    toss: true,
    heads: 0,
    tails: 0,
  }

  tossButtonFunction = () => {
    const {toss} = this.state
    this.setState(prevState => ({
      toss: !prevState.toss,
    }))

    if (toss === true) {
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {image, heads, tails} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <br />
          <button
            type="button"
            className="btnn"
            onClick={this.tossButtonFunction}
          >
            Toss Coin
          </button>
          <div className="paradiv">
            <p className="total">Total:{heads + tails}</p>
            <p className="total">Heads:{heads}</p>
            <p className="total">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
