import React, { Component } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import axios from 'axios';
import "./contact.css";
import { Consumer } from "../../context";

// generated with snipet rcc
// Example using state managment using Context API
class Contact extends Component {
  // Inside way propTypes validation
  /*     static propTypes = {
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }; */
  state = {
    showDetails: false
  };
  onArrowClick = e => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  onDeleteClick = async (id, dispatch) => {
    console.log("Done");
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({type: 'DELETE_CONTACT', payload: id});
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showDetails } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.onArrowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`/contacts/edit/${id}`}>
                  <i 
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: 'black',
                    marginRight: '1rem'
                  }}
                  className="fas fa-pencil-alt">
                  </i>
                </Link>
              </h4>
              {showDetails ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
// for state compoenent outside way
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  //name: PropTypes.string.isRequired,
  //email: PropTypes.string.isRequired,
  //phone: PropTypes.string.isRequired
};
export default Contact;
