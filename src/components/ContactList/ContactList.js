import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const filterContacts = getVisibleContacts();
  return (
    <ul>
      {filterContacts?.map(contact => (
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
