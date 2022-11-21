import { useRef } from 'react';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function NewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(contact) {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contact added successfully.',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'An error ocurred while trying to add the contact.'
      });
    }
  }

  return (
    <>
      <PageHeader title="New Contact" />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Add"
        onSubmit={handleSubmit}
      />
    </>
  );
}
