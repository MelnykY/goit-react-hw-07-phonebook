import { GlobalStyle } from './GlobalStyles';

import { Filter } from '../Filter/Filter';
import { Contacts } from '../Contacts/Contacts';
import { Form } from '../ContactForm/ContactForm';

import { Container, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      <Contacts />
      <GlobalStyle />
    </Container>
  );
};