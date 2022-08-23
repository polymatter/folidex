import * as React from 'react';
import renderer from 'react-test-renderer';
import RiskDetail from './RiskDetail';
import RiskStoreContext from '../store/RiskStore';
import mockdata from '../mocks/RiskStore.json';

describe('<RiskDetail>', () => {

  test('can render a risk detail', () => {

    const tree = renderer.create(
      <RiskStoreContext.Provider value={mockdata}>
        <RiskDetail riskId={"Id_1"} showIcon={false} />
      </RiskStoreContext.Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})