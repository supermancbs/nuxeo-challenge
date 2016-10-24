import React, { Component } from 'react'
import {connect} from 'react-redux'
import addFolder from '../../actions/addFolder'
import retrieveUser from '../../actions/addFolder'
import { bindActionCreators } from 'redux'


let AddFolder = class extends Component{
  onSubmit(e){

  }
  render(){
    return (


          <input type="text" placeholder="add folder"/>
          <input type="button" value="New Folder"/>

    )
  }


}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addphoto }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddFolder)
