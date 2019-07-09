import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "fill@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "Mona Johnson",
        email: "fill2@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        id: 3,
        name: "Krass Johnson",
        email: "fill1@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //Add Contact

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete Contact

  //Set current

  //Clear current

  //Update Contact

  //Filter contact

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
