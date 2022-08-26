import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import RiskStoreContext from '../store/RiskStore';
import mockdata from '../mocks/RiskStore.json';
import RiskList from './RiskList';

describe('<RiskList>', () => {

  test('can render a risk list and be able to select a risk item', () => {

    const mockNavigation = jest.fn();
    const tree = render(
      <RiskStoreContext.Provider value={mockdata}>
        <RiskList onPressRiskSummary={mockNavigation} showIcon={false} />
      </RiskStoreContext.Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();

    const testItem = 2;
    fireEvent.press(screen.getByText(mockdata[testItem].label));
    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith(mockdata[testItem].id);
  })
})