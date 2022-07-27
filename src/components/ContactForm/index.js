import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');

  const emailInput = useRef(null);

  function handleClick() {
    console.log(emailInput.current.value);
  }

  return (
    <Form>
      <button type="button" onClick={handleClick}>
        Logs email input
      </button>
      <FormGroup>
        <Input
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          defaultValue="mateus@devacademy.com.br"
          placeholder="Email"
          ref={emailInput}
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Phone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
