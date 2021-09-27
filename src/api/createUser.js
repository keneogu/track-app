import BASE_URL from '../constant';

const createExpenditure = async (data) => {
  const url = 'http://localhost:4000/users';
  // const url = `${BASE_URL}/users`;

  const config = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(url, config);
  const result = await res.json();
  if (result.id) {
    return ({
      error: false,
      payload: result,
    });
  }
  return ({
    error: result,
  });
};

export default createExpenditure;
