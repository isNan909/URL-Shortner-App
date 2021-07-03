import axios from 'axios';

export async function getAll(linkURL, key) {
  try {
    await axios.get(linkURL, {
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer' + key,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(`${e} During fetching the Links`);
  }
}

export default { getAll };
