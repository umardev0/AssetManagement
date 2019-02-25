import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ModelItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }

    render(){
        return(
            <li className="collection-item">
              <Link to={`/models/${this.state.item.id}`}>
                {this.state.item.customID} - {this.state.item.description}
              </Link>
            </li>
        )
    }
}

export default ModelItem;