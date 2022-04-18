import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { useDeleteContactMutation } from '../../redux/contacts/contactSlice';

const ContactItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <>
      <p className={s.nameContact}>{name}:</p>
      <span className={s.numberContact}>{phone}</span>
      <button
        type="button"
        className={s.buttonDelete}
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
