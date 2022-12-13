import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background-color: #FAFAFA;
`;

export const CategoryContainer = styled.View`
  height: 73px;
  margin-top: 34px;
  margin-left: 20px;
`;

export const MenuContainer = styled.View`
  flex: 1;
  margin: 32px 24px 0;
`;

export const Footer = styled.View`
  min-height: 110px;
  background-color: #FFF;
`;

export const FooterContainer = styled.SafeAreaView``;
