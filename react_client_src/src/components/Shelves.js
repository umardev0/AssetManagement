import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShelfItem from './ShelfItem';

class Shelves extends Component {
  constructor(){
    super();
    this.state = {
      shelves: []
    }
  }

  componentWillMount(){
    this.getShelves();
  }

  getShelves(){
    axios.get('http://localhost:3000/api/shelves')
      .then(response => {
        this.setState({shelves: response.data}, () => {
          // console.log(this.state);
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const shelfItems = this.state.shelves.map((shelf, i) => {
      return(
        <ShelfItem key={shelf.id} item={shelf} />
      )
    })

    return (
      <div>
        <h3>Shelves</h3>
        <ul className="collection">
          {shelfItems}
        </ul>

        <div className="fixed-action-btn">
          <Link to="/shelves/add" className="btn-floating btn-large red">
            <i className="fas fa-plus"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default Shelves;