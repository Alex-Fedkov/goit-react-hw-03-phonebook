import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { Container } from "./styles.jsx";
import { loadKey, saveKey } from "../utils";

const LOCALSTORAGE_CONTACTS_KEY = "contacts";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  componentDidMount() {
    const contacts = loadKey(LOCALSTORAGE_CONTACTS_KEY) || [];
    this.setState({ contacts });
  }

  componentDidUpdate(_, prevState) {
    const contacts = this.state.contacts;
    if (prevState.contacts !== contacts) {
      saveKey(LOCALSTORAGE_CONTACTS_KEY, contacts);
    }
  }

  onDelete = (idDel) => {
    this.setState (prevState => ({contacts: prevState.contacts.filter(({ id }) => id !== idDel )}));
  }

  onChange = (event) => {
    const field = event.target.name;
   
    this.setState({ [field]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("onSubmit");
    const { name, number, contacts } =this.state;
    const isContact = contacts.some(({ name: contactName }) => contactName.toLowerCase() === name.toLowerCase());

    if (isContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const id = nanoid();
    this.setState(prevState => ({ contacts: [...prevState.contacts, { id, name, number }] }));
    this.setState({ name: "", number: "" });
  }

  onFilter = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  }

  render () {
    const { name, number, filter } = this.state;
    const filteredContacts = this.onFilter();
    console.log("filteredContacts", filteredContacts);
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm name={name} number={number} onChange={this.onChange} onSubmit={this.onSubmit}/>
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onChange} />
        <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
      </Container>
      
    )
  }
};

export default App;
