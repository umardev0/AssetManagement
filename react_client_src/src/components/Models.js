import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ModelItem from './ModelItem';

import Dropzone from 'react-dropzone';
import S3Client from 'aws-s3';

const config = {
  bucketName: 'combat2',
  dirName: 'assets',
  region: 'eu-central-1',
  accessKeyId: 'AWS_ACESS_KEY_ID',
  secretAccessKey: 'AWS_SECRET_ACCESS_KEY',
}

class Models extends Component {
  constructor(){
    super();
    this.state = {
      models: [],
      multiple: false
    }
  }

  componentWillMount(){
    this.getModels();
  }

  onDropAccepted(files) {
    // console.log(files[0]);
    S3Client.uploadFile(files[0], config)
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  getModels(){
    axios.get('http://localhost:3000/api/models')
      .then(response => {
        this.setState({models: response.data}, () => {
          // console.log(this.state);
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const modelItems = this.state.models.map((model, i) => {
      return(
        <ModelItem key={model.id} item={model} />
      )
    })

    return (
      <div>
        <h3>Models</h3>
        <div className="dropzone">
          <Dropzone onDropAccepted={this.onDropAccepted.bind(this)} multiple={this.state.multiple}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>

        <ul className="collection">
          {modelItems}
        </ul>

        <div className="fixed-action-btn">
          <Link to="/models/add" className="btn-floating btn-large red">
            <i className="fas fa-plus"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default Models;
