var React = require('react');
var Dropzone = require('react-dropzone');

var DropzoneDemo = React.createClass({
    getInitialState: function () {
        return {
          files: []
        };
    },

    onDrop: function (acceptedFiles) {
      
      this.setState({
        files: acceptedFiles
      });
      this.props.handlePhoto(acceptedFiles)
    },

    onOpenClick: function () {
      this.dropzone.open();
    },

    render: function () {
        return (
            <div>
                <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick}>
                    Open Dropzone
                </button>
                {this.state.files.length > 0 ? <div>
                <h2>Uploading {this.state.files.length} files...</h2>
                <div>{this.state.files.map((file) => <img src={file.preview} role="presentation"/> )}</div>
                </div> : null}
            </div>
        );
    }
});

export default DropzoneDemo
