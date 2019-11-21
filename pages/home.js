import React from 'react';

import Link from 'next/link'
import Head from 'next/head'

import styled from 'styled-components'

import withAnalytics from '~/hocs/withAnalytics'
// import { Container } from './styles';

const Title = styled.h1`
  color: #069;
  font-size: 40px;
`
function Home() {
  return (
    <>
      <Head>Home</Head>
      <img width="200" src="/super_imggirafa.jpg" />
      <Title >Hello word</Title>
      <Link href="/users">
        <a>Usuários</a>
      </Link>
    </>
  );
}

export default withAnalytics()(Home);