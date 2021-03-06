import { useState } from 'react';

import s from '../ContactForm/ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contactSlice';
import { Watch } from 'react-loader-spinner';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const [createContact, { isLoading }] = useCreateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error(`${name} is already in contacts.`);
      return;
    }
    createContact({ name, phone });
    setName('');
    setNumber('');
    toast.success(`${name} add to contacts`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            className={s.input}
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="phone"
            className={s.input}
            value={phone}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={s.buttonAdd}>
          {isLoading ? (
            <Watch
              color=" #ff6b08"
              height={35}
              width={100}
              ariaLabel="loading"
            />
          ) : (
            'Add contact'
          )}
        </button>
      </form>
      <ToastContainer autoClose={3000} position="top-center" />
    </>
  );
}
