jest.useFakeTimers()
import * as React from 'react';
import renderer from 'react-test-renderer';
import RiskSummaryItem from './RiskSummaryItem';
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

describe('<RiskSummaryItem>', () => {

  test('can render a risk item', () => {

    const tree = renderer.create(
      <RiskStoreContext.Provider value={mockdata}>
        <RiskSummaryItem riskId={"Id_1"} />
      </RiskStoreContext.Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})