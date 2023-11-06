import React from 'react';
import '../style.css';
import { NavLink } from "react-router-dom";

class ListImg extends React.Component {
  render() {
    const { name, img, price } = this.props;
    return (
      <div className="list_img"> 
        <NavLink to={'/ListDetail/' + this.props.id} exact>
          <img alt='text' src={img} className="img-responsive" />
          <h4>{name}</h4>
          <p>{price}</p>
        </NavLink>
      </div>
    );
  }
}

export default ListImg;
