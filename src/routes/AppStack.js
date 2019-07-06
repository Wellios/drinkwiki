import { createStackNavigator } from 'react-navigation';
import Categories from '../screens/Categories';
import Drinks from '../screens/Drinks';
import Details from '../screens/Details';

export const AppStack = createStackNavigator({
  Categories: {
    screen: Categories,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Drinks: {
    screen: Drinks,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      header: null,
    }),
  },
});
