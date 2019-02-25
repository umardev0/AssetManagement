import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ShelfDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount(){
      this.getShelf();
    }

    getShelf(){
      let shelfId = this.props.match.params.id;
      axios.get(`http://localhost:3000/api/shelves/${shelfId}`)
      .then(response => {
        this.setState({details: response.data}, () => {
          // console.log(this.state);
        })
      })
      .catch(err => console.log(err));
    }

    onDelete(){
      let shelfId = this.state.details.id;
      axios.delete(`http://localhost:3000/api/shelves/${shelfId}`)
      .then(response => {
        this.props.history.push('/shelves');
      })
      .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
              <br />
              <Link className="btn grey" to="/shelves">Back</Link>
              <h3>{this.state.details.customID}</h3>
              <ul className = "collection">
                <li className="collection-item">{this.state.details.description}</li>
              </ul>
              <Link className="btn" to={`/shelves/edit/${this.state.details.id}`}>Edit</Link>
              <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
            </div>
        )
    }
}

export default ShelfDetails;