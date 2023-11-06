import React from 'react';
import '../style.css';

class ListDataLi extends React.Component {
  render() {
    return (
      <li className="d-flex justify-content-between">
        <p className='my-3'>
          I'm <b>{this.props.name}</b> and i am <b>{this.props.age}</b> years
          old!
        </p>
        <div className='my-3'>
          <span onClick={this.props.click} className="badge">
            Delete
          </span>
        </div>
      </li>
    );
  }
}

export default ListDataLi;
