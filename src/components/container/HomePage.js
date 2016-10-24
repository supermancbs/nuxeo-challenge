import React, { Component } from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import Document from '../presentational/Document'
import Folder from '../presentational/Folder'
import Picture from '../presentational/Picture'
import AddFolder from './AddFolder'

let HomePage = class extends Component{


  render() {
    if (this.props.currentUser.currentUser.entries){
      let documents = this.props.currentUser.currentUser.entries.map((entry) => {
        if (entry.type === "Workspace"){
          return <Folder content={entry}/>
        }
        else if (entry.type === "Picture") {
          return <Picture content={entry}/>
        }
        else{
          return <Document content={entry}/>
        }
      })
      return (
      <div>
        {documents}
        <AddFolder/>
        <Login/>
      </div>

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
