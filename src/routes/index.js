import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Categories from '../screens/Categories';
import Drinks from '../screens/Drinks';

export const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Categories: {
        screen: Categories,
      },
      Drinks: {
        screen: Drinks,
      },
    },
    {
      initialRouteName: 'Categories',
    },
  ),
);
