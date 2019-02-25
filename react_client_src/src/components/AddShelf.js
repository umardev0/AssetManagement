import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddShelf extends Component{
  addShelf(newShelf){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/shelves',
      data: newShelf
    })
    .then(response => {
      this.props.history.push('/shelves');
    })
    .catch(err => console.log(err));
  }

  onSubmit(e){
    const newShelf = {
      customID: this.refs.customId.value,
      description: this.refs.description.value
    }
    this.addShelf(newShelf);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/shelves">Back</Link>
        <h3>Add Shelf</h3>
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

export default AddShelf;