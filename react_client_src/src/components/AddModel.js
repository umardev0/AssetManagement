import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddModel extends Component{
  addModel(newModel){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/models',
      data: newModel
    })
    .then(response => {
      this.props.history.push('/models');
    })
    .catch(err => console.log(err));
  }

  onSubmit(e){
    const newModel = {
      customID: this.refs.customId.value,
      description: this.refs.description.value
    }
    this.addModel(newModel);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/models">Back</Link>
        <h3>Add Model</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="customId" ref="customId" />
            <label htmlFor="customId">ID</label>
          </div>
          <div className="input-field">
            <input type="text" name="description" ref="description" />
            <label htmlFor="description">Description</label>
          </div>
          <input type="submit" value="save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddModel;