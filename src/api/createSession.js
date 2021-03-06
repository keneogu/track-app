import BASE_URL from '../constant';

const createSession = async (user) => {
  // const url = `http://localhost:4000/users/${user}`;
  const url = `${BASE_URL}/users/${user}`;
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const res = await fetch(url, config);
  if (res.status === 404) {
    return ({
      error: { login: ['Invalid username'] },
    });
  }
  const result = await res.json();
  return ({
    error: false,
    payload: result,
  });
};

export default createSession;
