import Head from 'next/head';
import * as Styled from './Nav.styles';
import Link from 'next/link';
import { nav } from '../../data/nav';

const Nav = () => {
  return (
    <>
      <Head>
        <title> Gee 기술 블로그</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Styled.NavContainer>
        <Styled.NavInnerWrapper>
          <Link href={'/'}>
            <h1>{'GEE'}</h1>
          </Link>
          <Styled.NavCategory>
            {nav.map((root) => (
              <Link key={root.title} href={root.location}>
                {root.title}
              </Link>
            ))}
          </Styled.NavCategory>
        </Styled.NavInnerWrapper>
      </Styled.NavContainer>
    </>
  );
};

export default Nav;
