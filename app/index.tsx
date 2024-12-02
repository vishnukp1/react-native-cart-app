import React from "react";
import { Provider } from "react-redux"; // Redux provider for state management
import { store } from "./redux/store";
import ProductScreen from "./screen/ProductScreens";
import CartScreen from "./screen/CartScreen";
import { createStackNavigator } from "@react-navigation/stack"; // Import stack navigator

const Stack = createStackNavigator();

const App: React.FC = () => (
  <Provider store={store}>
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  </Provider>
);

export default App;
