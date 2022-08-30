import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import RiskSummaryItem from './RiskSummaryItem';
import RiskStoreContext from '../store/RiskStore';
import mockdata from '../mocks/RiskStore.json';
import Risk from '../entities/Risk';

describe('<RiskSummaryItem>', () => {

  test('can render a risk item', () => {

    const tree = render(
      <RiskStoreContext.Provider value={mockdata as Risk[]}>
        <RiskSummaryItem riskId={"Id_1"} />
      </RiskStoreContext.Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
})