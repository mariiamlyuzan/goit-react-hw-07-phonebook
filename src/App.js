import './App.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { useState } from 'react';
import Section from './components/Section';
import 'react-toastify/dist/ReactToastify.css';
import { useFetchContactsQuery } from './redux/contacts/contactSlice';

export default function App() {
  const { data: contacts } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  const filterContacts = getVisibleContacts();
  return (
    <Container>
      <Section>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={changeFilter} />
        {contacts && <ContactList contacts={filterContacts} />}
      </Section>
    </Container>
  );
}
