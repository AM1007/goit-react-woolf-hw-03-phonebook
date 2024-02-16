import React from 'react';
import propTypes from 'prop-types';
import {
  ContactListUl,
  ContactListLi,
  ButtonDelete,
} from './ContactList.styled';
import { FcPhoneAndroid } from 'react-icons/fc';

export const ContactList = ({ contacts, deleteContact }) => (
  <ContactListUl>
    {contacts.map((contact, id) => (
      <ContactListLi key={id}>
        <FcPhoneAndroid />
        {contact.name}: {contact.number}
        <ButtonDelete type="button" onClick={() => deleteContact(contact.id)}>
          Delete
        </ButtonDelete>
      </ContactListLi>
    ))}
  </ContactListUl>
);
ContactList.propTypes = {
  deleteContact: propTypes.func.isRequired,
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
