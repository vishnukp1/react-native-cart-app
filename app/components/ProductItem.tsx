import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Product } from '../types/intex';


interface Props {
  product: Product;
  onAddToCart: () => void;
}

const ProductItem: React.FC<Props> = ({ product, onAddToCart }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
    <Button title="Add to Cart" onPress={onAddToCart} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  name: { fontSize: 18 },
  price: { fontSize: 16, marginBottom: 8 },
});

export default ProductItem;
