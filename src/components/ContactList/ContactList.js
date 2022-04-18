import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts?.map(contact => (
        <li key={contact.id} className={s.listContact}>
          <ContactItem {...contact} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
