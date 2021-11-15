import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  h1textFunc = () => {
    const {isLoggedIn} = this.state
    return isLoggedIn ? 'Welcome User' : 'Please LogIn'
  }

  bTextFun = () => {
    const {isLoggedIn} = this.state
    return isLoggedIn ? 'Logout' : 'Login'
  }

  buttonClicked = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const buttonText = this.bTextFun()
    const h1Text = this.h1textFunc()
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="h1">{h1Text}</h1>
          <button type="button" className="button" onClick={this.buttonClicked}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
