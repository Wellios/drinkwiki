import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppStack } from './AppStack';

export const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main: {
        screen: AppStack,
      },
    },
    {
      initialRouteName: 'Main',
    },
  ),
);
