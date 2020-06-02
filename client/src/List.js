import React, { Component } from 'react';
import { getList, addToList, deleteItem, updateItem} from './ListsFunctions';

class List extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      term: "",
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="col-md-12">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <div className="row">
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="taskName"
                  value={this.state.term || ""}
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
          </div>
        </form>      
      </div>
    )
  }
}
