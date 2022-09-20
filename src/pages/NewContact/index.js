import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import toast from '../../services/utils/toast';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      await ContactsService.createContact(contact);

      toast({
        type: 'success',
        text: 'Contact added successfully.'
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
        buttonLabel="Add"
        onSubmit={handleSubmit}
      />
    </>
  );
}
