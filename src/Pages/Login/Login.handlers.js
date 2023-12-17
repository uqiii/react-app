// import { useSignIn } from 'react-auth-kit';

import axios from '../../Api/axios';

const doLogin = (props) => async (formValues) => {
  // const signIn = useSignIn();
  const { navigate } = props;
  props.navigate('/');
  const url = '/users/login';
  const { email, password } = formValues;
  try {
    await axios.post(
      url,
      { email, password }
    );
    // const accessToken = response?.data?.accessToken;
    // signIn({
    //   token: accessToken,
    //   expiredIn: 1800,
    //   tokenType: 'Bearer',
    //   authState: { email }
    // });
    navigate('/', { replace: true });
  } catch (err) {
    console.log(`Error when when requesting ${url}:`, err);
  }
};

export default { doLogin };
