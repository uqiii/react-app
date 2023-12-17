import axios from '../../Api/axios';

const getPresences = () => async (callback) => {
  const url = '/users/current/presences';
  const token = 'Bearer';
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token
      }
    });
    callback(response);
  } catch (err) {
    console.log('Error when fetching :', err);
  }
};

export default { getPresences };
