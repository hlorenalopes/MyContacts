export default class APIError extends Error {
  constructor(message, response) {
    super(message); // Error.constructor

    this.name = 'APIError';
    this.response = response;
  }

  getContentType() {
    return this.response.headers.get('Content-Type');
  }
}
