import * as React from 'react';
import { render } from '@testing-library/react-native';
import RiskDetail from './RiskDetail';
import RiskStoreContext from '../store/RiskStore';
import mockdata from '../mocks/RiskStore.json';
import Risk from '../entities/Risk';

interface Snapshot {
  children: Array<{ props: { value: string } }>
}

describe('<RiskDetail>', () => {

  test('can render a risk detail', () => {
    const riskId="Id_1"
    const risk = mockdata.find(d => d.id === riskId) as Risk;
    expect(risk).not.toBeUndefined();

    const { toJSON: snapshotFn, getByLabelText } = render(
      <RiskStoreContext.Provider value={mockdata as Risk[]}>
        <RiskDetail riskId={riskId} />
      </RiskStoreContext.Provider>
    );
    const snapshot = snapshotFn();
    expect(getByLabelText("Label").props.value).toEqual(risk.label);
    expect(getByLabelText("Mitigation").props.value).toEqual(risk.mitigation);
    expect(getByLabelText("Contingency").props.value).toEqual(risk.contingency);
    expect(getByLabelText("Impact").props.value).toEqual(risk.impact);

    expect(snapshot).toMatchSnapshot(); 
  })
})