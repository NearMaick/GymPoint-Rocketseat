import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Request from './pages/HelpOrder/Request';
import ListOrders from './pages/HelpOrder/ListOrders';
import Sign from './pages/Sign';
import Checkins from './pages/Checkins';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Sign,
        }),
        App: createBottomTabNavigator({
          Checkins,
          Help: {
            screen: createStackNavigator(
              {
                ListOrders,
                Request,
              },
              {
                headerMode: {},
              },
            ),
            navigationOptions: {
              tabBarLabel: 'Pedir Auxílio',
            },
          },
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
