import React, { Component } from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import Document from '../presentational/Document'

let HomePage = class extends Component{

  render() {

    if (this.props.currentUser.currentUser.entries){
      let documents = this.props.currentUser.currentUser.entries.map((entry) => {
        return <Document content={entry}/>
      })
      return (
      <div>{documents}</div>
      )
    }
    else {
      return (
      <div><Login/></div>

      )
    }

    }

}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(HomePage)
