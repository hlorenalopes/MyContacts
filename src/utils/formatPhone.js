export default function formatPhone(phoneNumber) {
  return phoneNumber
    .replace(/\D/g, '')
    .replace(/^(\d{3})\B/, '($1) ')
    .replace(/(\d{3})(\d{4})/, '$1-$2');
}
