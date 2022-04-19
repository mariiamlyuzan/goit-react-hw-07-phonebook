import './App.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Section from './components/Section';
import 'react-toastify/dist/ReactToastify.css';
import { useFetchContactsQuery } from './redux/contacts/contactSlice';

export default function App() {
  const { data: contacts } = useFetchContactsQuery();

  return (
    <Container>
      <Section>
        <h1 className="title">Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2 className="title">Contacts</h2>
        <Filter />
        {contacts && <ContactList contacts={contacts} />}
      </Section>
    </Container>
  );
}
