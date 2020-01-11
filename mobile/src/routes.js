import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HelpOrder from './pages/HelpOrder';
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
          HelpOrder,
        }),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
