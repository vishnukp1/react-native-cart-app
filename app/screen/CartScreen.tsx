import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';  // Cart actions

const CartScreen: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);  // Get cart items from Redux store

  const handleIncreaseQuantity = (id: string) => {
    dispatch(increaseQuantity(id));  // Increase quantity of item
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decreaseQuantity(id));  // Decrease quantity of item
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));  // Remove item from cart if quantity is 0
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>Price: ${item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Button title="Increase" onPress={() => handleIncreaseQuantity(item.id)} />
            <Button title="Decrease" onPress={() => handleDecreaseQuantity(item.id)} />
            <Button
              title="Remove"
              onPress={() => {
                if (item.quantity === 0) {
                  handleRemoveFromCart(item.id);  // Remove item if quantity is 0
                }
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    padding: 16,
    borderBottomWidth: 1,
  },
});

export default CartScreen;
