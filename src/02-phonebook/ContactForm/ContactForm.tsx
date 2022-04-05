import { Component } from 'react';
import '../Phonebook.css';

interface IProps {
  onSubmitForm: (state: { name: string; number: string }) => void;
}

interface IState {
  name: string;
  number: string;
}

class ContactForm extends Component<IProps, IState> {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    // const { name, value } = event.currentTarget;
    // this.setState({ [name]: value });
    const { value } = event.currentTarget;
    this.setState({ name: value });
  };

  handleTelChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    this.setState({ number: value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.onSubmitForm(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form_contact">
          Name
          <input
            className="form_contact-input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="form_contact">
          Number
          <input
            className="form_contact-input"
            type="tel"
            name="number"
            value={number}
            onChange={this.handleTelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className="form_contact-button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
