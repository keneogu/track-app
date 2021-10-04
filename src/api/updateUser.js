import BASE_URL from '../constant';

const updateUser = async (data, id) => {
  // const url = `http://localhost:4000/users/${id}`;
  const url = `${BASE_URL}/users/${id}`;
  const config = {
    mode: 'cors',
    method: 'PUT',
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

export default updateUser;
