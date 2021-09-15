const indexExpenditures = async (userId) => {
  const url = `http://localhost:4000/expenditures?user_id=${userId}`;
  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = await fetch(url, config);
  const result = await res.json();
  return ({
    error: false,
    payload: result,
  });
};

export default indexExpenditures;
