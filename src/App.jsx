import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export const App = () => {
  return (
    <div style={{ margin: '30px' }}>
      <h1 style={{ paddingBottom: '30px' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ paddingBottom: '30px' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
