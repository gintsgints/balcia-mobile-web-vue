const poolData = {
  UserPoolId: import.meta.env.VITE_AWS_USER_POOL_ID ? import.meta.env.VITE_AWS_USER_POOL_ID : 'not defined',
  ClientId: import.meta.env.VITE_AWS_CLIENT_ID ? import.meta.env.VITE_AWS_CLIENT_ID : 'not defined',
}

export default poolData;
