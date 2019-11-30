import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HelpOrder from './pages/HelpOrder';

export default createAppContainer(
  createSwitchNavigator({
    HelpOrder,
  }),
);
