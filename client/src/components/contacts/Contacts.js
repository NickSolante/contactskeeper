import React, { Fragment, useContext, useEffect } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a Contact</h4>;
  }

  return (
    <div>
      <Fragment>
        {filtered !== null
          ? filtered.map(contact => (
              <ContactItem key={contact._id} contact={contact} />
            ))
          : contacts.map(contact => (
              <ContactItem key={contact._id} contact={contact} />
            ))}
      </Fragment>
    </div>
  );
};

export default Contacts;
