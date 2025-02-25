import React, { Component } from "react";
import Contact from "./Contact.jsx";

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact, onDeleteAll } = this.props;

    if (!contacts || contacts.length === 0) {
      return <p>No contacts available.</p>;
    }

    return (
      <div className="contact-container">
        <div className="contact-row">
          {contacts.map((contact) => (
            <Contact
              name={contact.name}
              note={contact.note}
              phone={contact.phone}
              address={contact.address}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </div>
        <div className="button-delete-all-container">
        <button className="button-delete-all" onClick={onDeleteAll}>
          Delete All
        </button>
        </div>
        
      </div>
    );
  }
}

export default ContactList;
