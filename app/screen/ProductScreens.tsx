import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';  

const ProductScreen: React.FC <any> = ({ navigation }) =>  {
  const dispatch = useDispatch();

  const products = [
    { id: '1', name: 'Product 1', price: 10 },
    { id: '2', name: 'Product 2', price: 20 },
    { id: '3', name: 'Product 3', price: 30 },
  ];

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
            <Button
              title="Add to Cart"
              onPress={() => handleAddToCart(item)}  
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
         <Button
        title="Go to Cart"
        onPress={() => navigation.navigate('Cart')}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
  },
});

export default ProductScreen;
