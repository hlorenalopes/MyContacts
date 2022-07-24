import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

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
      <Button type="button">Save</Button>
      <Button type="button" disabled>
        Save
      </Button>
    </>
  );
}
