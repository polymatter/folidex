jest.useFakeTimers()
import * as React from 'react';
import renderer from 'react-test-renderer';
import RiskSummaryItem from './RiskSummaryItem';
import RiskStoreContext from '../store/RiskStore';
import mockdata from '../mocks/RiskStore.json';

describe('<RiskSummaryItem>', () => {

  test('can render a risk item', () => {

    const tree = renderer.create(
      <RiskStoreContext.Provider value={mockdata}>
        <RiskSummaryItem riskId={"Id_1"} showIcon={false}/>
      </RiskStoreContext.Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})