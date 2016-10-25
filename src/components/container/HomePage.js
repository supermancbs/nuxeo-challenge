import React, { Component } from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import Document from '../presentational/Document'
import Folder from './Folder'
import Picture from '../presentational/Picture'
import AddFolder from './AddFolder'
import { Grid } from 'react-bootstrap'

let HomePage = class extends Component{

  render() {
    if (this.props.currentUser.currentUser.entries){
      let documents = this.props.currentUser.currentUser.entries.map((entry) => {
        if (entry.type === "Workspace"){
          return <Grid><Folder content={entry}/></Grid>
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
