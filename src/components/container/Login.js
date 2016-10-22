import React, { Component } from 'react'
import {connect} from 'react-redux'
import retrieveUser from '../../actions/retrieveUser'

let Login = class extends Component{
  startApp(){
    this.props.retrieveUser().then((resp) => {
      debugger
    })
  }
  render() {

      return (

        <div>
          <form onSubmit={this.startApp.bind(this)}>
            <input type="submit" value="login"/>
          </form>
        </div>
      )
    }
}

Login = connect()(Login)

export default Login
