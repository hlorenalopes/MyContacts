import useEditContact from './useEditContact';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';

export default function EditContact() {
  const {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  } = useEditContact();

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Loading...' : `Edit ${contactName}`} />

      <ContactForm
        ref={contactFormRef}
        buttonLabel="Save changes"
        onSubmit={handleSubmit}
      />
    </>
  );
}
