import * as React from 'react';
import { render, screen } from '@testing-library/react-native';
import RiskLevelBadge from './RiskLevelBadge';

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

describe('<RiskLevelBadge>', () => {

  test('can render a high risk badge', () => {

    const tree = render(
      <RiskLevelBadge level={'High'} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(screen.getByText('High')).toBeInTheDocument();
  })

  test('can render a medium risk badge', () => {

    const tree = render(
      <RiskLevelBadge level={'Medium'} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(screen.getByText('Medium')).toBeInTheDocument();
  })

  test('can render a low risk badge', () => {

    const tree = render(
      <RiskLevelBadge level={'Low'} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
    expect(screen.getByText('Low')).toBeInTheDocument();
  })
})