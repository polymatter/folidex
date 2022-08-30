// required to force typescript to recognise the extended matchers
import * as jestNative from '@testing-library/jest-native';

// This means snapshots will have an <Icon name="X" color="Y" /> entry which is useful for actually recording intent.
// Without it by default it will render a <Text /> entry and not show the props
jest.mock('@expo/vector-icons', () => ({
  AntDesign: 'Icon',
  Entypo: 'Icon',
  EvilIcons: 'Icon',
  Feather: 'Icon',
  Fontisto: 'Icon',
  FontAwesome: 'Icon',
  FontAwesome5: 'Icon',
  Foundation: 'Icon',
  Ionicons: 'Icon',
  MaterialCommunityIcons: 'Icon',
  MaterialIcons: 'Icon',
  Octicons: 'Icon',
  SimpleLineIcons: 'Icon',
  Zocial: 'Icon'
}));