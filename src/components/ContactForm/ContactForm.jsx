import { useSelector, useDispatch } from 'react-redux';
import { fetchAddContact } from '../../redax/operations';
import { selectContacts } from '../../redax/selectors';
import { StyledForm, Input, Label, Button } from '../ContactForm/ContactForm.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isContactExist = newName => {
    return contacts.find(({ name }) => {
      return name.toLowerCase() === newName.toLowerCase();
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (isContactExist(name)) {
      form.reset();
      return alert(`${name} is already in Contacts`);
    }
    const data = { name, number };
    dispatch(fetchAddContact(data));
    form.reset();
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button>Add contact</Button>
    </StyledForm>
  );
};

