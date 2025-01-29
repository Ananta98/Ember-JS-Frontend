import Service from '@ember/service';

export default class RequestService extends Service {
  async fetchGet(url) {
    return await fetch(`${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  async fetchPost(url, payload) {
    return await fetch(`${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  }

  async fetchPut(url, id, payload) {
    return await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());
  }

  async fetchDelete(url, id) {
    return await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }
}
