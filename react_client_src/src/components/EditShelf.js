import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditShelf extends Component{
  constructor(props){
    super(props);
    this.state = {
      customID:'',
      description:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount(){
    this.getShelf();
  }

  getShelf(){
    let shelfId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/shelves/${shelfId}`)
    .then(response => {
      this.setState({
        customID: response.data.customID,
        description: response.data.description
      }, () => {
        // console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  editShelf(newShelf){
    let shelfId = this.props.match.params.id;
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/shelves/${shelfId}`,
      data: newShelf
    })
    .then(response => {
      this.props.history.push('/shelves');
    })
    .catch(err => console.log(err));
  }

  onSubmit(e){
    const newShelf = {
      customID: this.refs.customID.value,
      description: this.refs.description.value
    }
    this.editShelf(newShelf);
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
        <h3>Edit Shelf</h3>
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

export default EditShelf;