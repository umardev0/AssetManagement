import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditModel extends Component{
  constructor(props){
    super(props);
    this.state = {
      customID:'',
      description:'',
      downloadLink:'',
      shelfID:'',
      lajiDocumentID:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getModel();
  }

  getModel(){
    let modelId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/models/${modelId}`)
    .then(response => {
      this.setState({
        customID: response.data.customID,
        description: response.data.description,
        downloadLink: response.data.downloadLink,
        shelfID: response.data.shelfID,
        lajiDocumentID: response.data.lajiDocumentID
      }, () => {
        // console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  editModel(newModel){
    let modelId = this.props.match.params.id;
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/shelves/${modelId}`,
      data: newModel
    })
    .then(response => {
      this.props.history.push('/models');
    })
    .catch(err => console.log(err));
  }

  onSubmit(e){
    const newModel = {
      customID: this.refs.customID.value,
      description: this.refs.description.value,
      downloadLink: this.refs.downloadLink.value,
      shelfID: this.refs.shelfID.value,
      lajiDocumentID: this.refs.lajiDocumentID.value
    }
    this.editModel(newModel);
    e.preventDefault();
  }

  handleInputChange(e){
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/shelves">Back</Link>
        <h3>Edit Model</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="customID" ref="customID" value={this.state.customID} onChange={this.handleInputChange}/>
            <label htmlFor="customId" className="active">ID</label>
          </div>
          <div className="input-field">
            <input type="text" name="description" ref="description" value={this.state.description} onChange={this.handleInputChange}/>
            <label htmlFor="description" className="active">Description</label>
          </div>
          <input type="submit" value="save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditModel;