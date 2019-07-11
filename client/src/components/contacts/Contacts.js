import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a Contact</h4>;
  }

  return (
    <div>
      <Fragment>
        {filtered !== null
          ? filtered.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))
          : contacts.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
      </Fragment>
    </div>
  );
};

export default Contacts;
