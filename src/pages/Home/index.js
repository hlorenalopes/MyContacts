import { Link } from 'react-router-dom';

import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Search by name..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contacts</strong>
        <Link to="/new">New contact</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Name</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Siva</strong>
              <small>Instagram</small>
            </div>
            <span>mateus@devacademy.com.br</span>
            <span>(401) 999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}

fetch('http://localhost:3001/contacts', {
  method: 'DELETE',
  headers: new Headers({
    'X-App-ID': '123',
  })
})
  .then((response) => {
    console.log('response', response);
  })
  .catch((error) => {
    console.log('error', error);
  });
