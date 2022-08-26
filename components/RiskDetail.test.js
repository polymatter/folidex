import * as React from 'react';
import { render } from '@testing-library/react-native';
import RiskDetail from './RiskDetail';
import RiskStoreContext from '../store/RiskStore';
import mockdata from '../mocks/RiskStore.json';

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
  Zocial: 'Icon',
  createMultiStyleIconSet: 'Icon',
  createIconSet: 'Icon',
  createIconSetFromFontello: 'Icon',
  createIconSetFromIcoMoon: 'Icon',
  createMu: 'Icon'
}));

describe('<RiskDetail>', () => {

  test('can render a risk detail', () => {

    const tree = render(
      <RiskStoreContext.Provider value={mockdata}>
        <RiskDetail riskId={"Id_1"} />
      </RiskStoreContext.Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})