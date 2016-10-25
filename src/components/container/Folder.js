import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import getFolderContents from '../../actions/getFolderContents'
import { Row, Col } from 'react-bootstrap'
import DropZone from '../presentational/DropZone'
import addPhoto from '../../actions/addphoto'


let AddFolder = class extends Component{
  constructor(props) {
   super(props);
   this.state = {showFull: false};
 }
  handleClick(e){
    e.preventDefault()
    this.setState({showFull: !this.state.showFull})
    // At this point I would call for getFolderContents
    // this.props.getFolderContents(this.props.content.path)
  }

  handlePhoto(photos){


  }

  render(){
    let fullFolder
    if (this.state.showFull===false){
      fullFolder = <div></div>
    }
    else {
    fullFolder = (
      <div>
        <Row className="show-grid">
          <DropZone handlePhoto={this.handlePhoto}/>
        </Row>

      </div>)
    }
    return  (
      <div>
        <Row className="show-grid">
          <Col xs={12} md={8}>Folder: {this.props.content.title}</Col>
          <Col xs={6} md={4}><input type="button" value="Toggle Folder" onClick={this.handleClick.bind(this)}/></Col>
        </Row>
        {fullFolder}
      </div>
  )


}}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFolderContents, addPhoto }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddFolder)
