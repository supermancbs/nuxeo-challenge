import React, { Component } from 'react'
import {connect} from 'react-redux'
import addFolder from '../../actions/addFolder'
import retrieveUser from '../../actions/addFolder'
import { bindActionCreators } from 'redux'


let AddFolder = class extends Component{
  onSubmit(e){
    e.preventDefault()
    let name = e.target.children[0].value
    e.target.children[0].value = ""
    this.props.addFolder(name).then(() => this.props.retrieveUser())
  }
  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" placeholder="add folder"/>
          <input type="submit" value="New Folder"/>
        </form>
      </div>
    )
  }


}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFolder, retrieveUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddFolder)
