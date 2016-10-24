import React from 'react'
import Dropzone from './DropZone'

const Folder = ({content}) => {

  return (
    <div>
      {content.title}
      <Dropzone/>
    </div>
  )
}

export default Folder
