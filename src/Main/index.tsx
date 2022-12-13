import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

import { CategoryContainer, Container, Footer, FooterContainer, MenuContainer } from './styles';

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoryContainer>
          <Categories />
        </CategoryContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>

      </Container>

      <Footer>
        <FooterContainer>

        </FooterContainer>
      </Footer>
    </>
  );
}
