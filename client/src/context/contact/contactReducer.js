import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  GET_CONTACTS,
  CLEAR_CONTACTS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: [...state.contacts, action.payload]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        loading: false,
        contact: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        )
      };
    case DELETE_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: state.contacts.filter(
          contact => contact._id !== action.payload
        )
      };
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: [],
        current: null,
        filtered: null,
        error: null
      };
    case SET_CURRENT:
      return {
        ...state,

        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,

        current: null
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        loading: false,
        filtered: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return contact.name.match(regex) || contact.email.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        loading: false,
        filtered: null
      };
    case CONTACT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
