import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';

import { Container, ContainerHeader, Table } from './styles';

export function HeaderTable() {
  return (
    <Container>
      <ContainerHeader>
        <Text size={24} weight="600">Pedido</Text>

        <TouchableOpacity>
          <Text size={14} weight="600" color="#D73035">cancelar pedido</Text>
        </TouchableOpacity>
      </ContainerHeader>

      <Table>
        <Text color="#666">Mesa 3</Text>
      </Table>
    </Container>
  );
}
