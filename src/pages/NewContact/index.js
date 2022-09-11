import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };

      const response = await ContactsService.createContact(contact);

      console.log(response);
    } catch {
      alert('An error ocurred while trying to add the contact.');
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
