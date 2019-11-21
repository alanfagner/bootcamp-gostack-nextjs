import React from 'react';
import axios from 'axios';

import withAnalytics from '~/hocs/withAnalytics'
// import { Container } from './styles';

 function Detail({ user }) {
  return (
    <>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} width="200"/>
    </>
  );
}

Detail.getInitialProps = async ({ query }) => {

  const res = await axios.get(
    `https://api.github.com/users/${query.user}`
  )

  return { user: res.data }

}

export default withAnalytics()(Detail)