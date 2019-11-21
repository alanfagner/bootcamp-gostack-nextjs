import React from 'react';

import axios from 'axios';

import Link from 'next/link'
import Head from 'next/head'

import withanalyics from '~/hocs/withAnalytics';

// import { Container } from './styles';

function User({users}) {
  return (
    <div >
       <Head>Usuários</Head>
      <ul>
        {users.map(user => 
          <li key={user.id}>
            {user.login}
            
            <Link href={`/users/${user.login}`}>
              <a>Acessar perfil</a>
            </Link>
          </li>
        )}
      </ul>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </div>
  );
}

User.getInitialProps = async () => {

  const res = await axios.get('https://api.github.com/orgs/rocketseat/members');

  return { users: res.data }
}

export default withanalyics()(User);