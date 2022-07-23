import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader title="New Contact" />

      <Input type="text" placeholder="Name" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
    </>
  );
}
