const doLogin = (props) => async (formValues) => {
  const { auth } = props;
  const { email, password } = formValues;
  await auth.loginUser({ email, password });
};

export default { doLogin };
