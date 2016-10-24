import React, { Component } from 'react'
import {connect} from 'react-redux'
import retrieveUser from '../../actions/retrieveUser'
import { bindActionCreators } from 'redux'


let Login = class extends Component{
  startApp(){

      this.props.retrieveUser().then((resp) =>{
      }
      )
  }
  render() {
console.log(this.props)
      return (

        <div>

            <input type="button" onClick={this.startApp.bind(this)}value="login"/>

        </div>
      )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ retrieveUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)

// Login = connect()(Login)
//
// export default Login
