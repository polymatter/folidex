import * as React from 'react';
import renderer from 'react-test-renderer';
import RiskStoreContext from '../store/RiskStore';
import mockdata from '../mocks/RiskStore.json';
import RiskList from './RiskList';

describe('<RiskList>', () => {

  test('can render a risk list', () => {

    const mockNavigation = jest.mock();
    const tree = renderer.create(
      <RiskStoreContext.Provider value={mockdata}>
        <RiskList onPressRiskSummary={mockNavigation} showIcon={false} />
      </RiskStoreContext.Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})