import { Header } from '../components/Header';

import { CategoryContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoryContainer></CategoryContainer>

        <MenuContainer></MenuContainer>

      </Container>

      <Footer>
        <FooterContainer>

        </FooterContainer>
      </Footer>
    </>
  );
}
