import React, { Component } from 'react'
import {connect} from 'react-redux'
import addFolder from '../../actions/addFolder'
import retrieveUser from '../../actions/addFolder'



let AddFolder = class extends Component{
  onSubmit(e){
    e.preventDefault()
    let name = e.target.children[0].value
    e.target.children[0].value = ""
    this.props.dispatch(addFolder(name)).then(this.props.dispatch(retrieveUser()))
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


export default connect()(AddFolder)
