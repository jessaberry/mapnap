import { useSelector } from "react-redux";
import { Component, useEffect } from "react";
import Box from "@mui/material/Box";
import { Masonry } from "@mui/lab";
import { Button, Typography } from "@mui/material";
import * as React from "react";
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone';


export default class DropzoneDialogExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: []
    };
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState({
      files: files,
      open: false
    });
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen.bind(this)}>
          Add Image
        </Button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={['image/jpeg', 'image/png', 'image/gif']}
          showPreviews={true}
          maxFileSize={process.env.AWS_S3_MAX_ALLOWED_MEDIA_FILE_SIZE.toNumber() * 1024 * 1024}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}