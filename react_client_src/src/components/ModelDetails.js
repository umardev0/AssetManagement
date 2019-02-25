import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ModelDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            details: ''
        }
    }

    componentWillMount(){
      this.getModel();
    }

    getModel(){
      let modelId = this.props.match.params.id;
      axios.get(`http://localhost:3000/api/models/${modelId}`)
      .then(response => {
        this.setState({details: response.data}, () => {
          // console.log(this.state);
        })
      })
      .catch(err => console.log(err));
    }

    onDelete(){
      let modelId = this.state.details.id;
      axios.delete(`http://localhost:3000/api/models/${modelId}`)
      .then(response => {
        this.props.history.push('/models');
      })
      .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
              <br />
              <Link className="btn grey" to="/models">Back</Link>
              <h3>{this.state.details.customID}</h3>
              <ul className = "collection">
                <li className="collection-item">{this.state.details.description}</li>
              </ul>
              <ul className = "collection">
                <li className="collection-item">{this.state.details.downloadLink}</li>
              </ul>
              <ul className = "collection">
                <li className="collection-item">{this.state.details.shelfID}</li>
              </ul>
              <ul className = "collection">
                <li className="collection-item">{this.state.details.lajiDocumentID}</li>
              </ul>
              <Link className="btn" to={`/models/edit/${this.state.details.id}`}>Edit</Link>
              <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
            </div>
        )
    }
}

export default ModelDetails;