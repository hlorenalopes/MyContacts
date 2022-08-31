import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay(500);

    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;

    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    // verbose
    // const errorMessage = body
    //   ? body.error
    //   : `${response.status} - ${response.statusText}`;
    // throw new Error(errorMessage);

    // simpler - optional chaining
    throw new Error(
      body?.error || `${response.status} - ${response.statusText}`
    );
  }
}

export default HttpClient;
