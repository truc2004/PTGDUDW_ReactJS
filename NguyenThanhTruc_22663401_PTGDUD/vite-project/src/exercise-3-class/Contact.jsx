import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, note, phone, address, onDeleteContact } = this.props;
    return (
      <div className="contact-box">
        <table className="contact-table">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{name}</td>
            </tr>
            <tr>
              <th>Note:</th>
              <td>{note}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{phone}</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>{address}</td>
            </tr>
          </tbody>
        </table>
        <button className="button-design" onClick={() => onDeleteContact(name)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Contact;
