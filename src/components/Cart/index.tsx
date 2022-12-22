import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';
import { Actions, Image, Item, ProductContainer, ProductDetails, QuantityContainer, Summary, TotalContainer } from './styles';

interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {

  function totalPrice(cartItems: CartItem[]) {
    return cartItems.reduce((total, { product, quantity }) => {
      return (product.price * quantity) + total;
    }, 0);
  }

  return (
    <>
      <FlatList
        data={cartItems}
        keyExtractor={cartItem => cartItem.product._id}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20, maxHeight: 150 }}
        renderItem={({ item: cartItem }) => (
          <Item>
            <ProductContainer>
              <Image
                source={{
                  uri: `http://192.168.16.218:3000/uploads/${cartItem.product.imagePath}`,
                }}
              />

              <QuantityContainer>
                <Text size={14} color="#666">x{cartItem.quantity}</Text>
              </QuantityContainer>

              <ProductDetails>
                <Text size={14} weight="600">{cartItem.product.name}</Text>
                <Text size={14} color="#666" style={{ marginTop: 4 }}>
                  {formatCurrency(cartItem.product.price)}
                </Text>
              </ProductDetails>
            </ProductContainer>

            <Actions>
              <TouchableOpacity>
                <MinusCircle />
              </TouchableOpacity>

              <TouchableOpacity style={{ marginLeft: 24 }}>
                <PlusCircle />
              </TouchableOpacity>
            </Actions>
          </Item>
        )}
      />

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">{formatCurrency(totalPrice(cartItems))}</Text>
            </>
          ) : (
            <>
              <Text color="#999">Seu carrinho</Text>
              <Text color="#999">está vazio</Text>
            </>
          )}
        </TotalContainer>

        <Button
          onPress={() => alert('ollláaaa')}
          disabled={cartItems.length > 0 ? false : true}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
