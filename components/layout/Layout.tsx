import Footer from '../footer';
import CustomHead from '../head';
import Nav from '../nav/Nav';
import * as Styled from './Layout.styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Nav />
      <CustomHead />
      <Styled.LayoutContainer>{props.children}</Styled.LayoutContainer>
      <Footer />
    </>
  );
};

export default Layout;
