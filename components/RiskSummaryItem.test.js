jest.useFakeTimers()
import * as React from 'react';
import renderer from 'react-test-renderer';
import RiskSummaryItem from './RiskSummaryItem';
import RiskStoreContext from '../store/RiskStore';

// TODO: Read this from a .json file instead so that other tests can use
const mockdata = [
  {
    "id": "Id_1",
    "level": "High",
    "label": "The server capacity initially defined may be inadequate",
    "mitigation": "Capacity analysis will be done during the design stage, if this shows a problem design issues will be revisited",
    "contingency": "Purchase and install additional disc space at the customer site",
    "impact": "Cost of disc space plus installation effort &amp; travel",
    "likelihood": "High"
  },
  {
    "id": "Id_2",
    "level": "Medium",
    "label": "Misunderstood requirements during bid, unambiguous, can't recover money for this client",
    "mitigation": "Multiple checkpoints with end users and client project manager, delivery of early drafts. This is more text to see how the thing grows as. ",
    "contingency": "Open discussion with client about issues raised, prepare for change request, may need to absorb some cost impact",
    "impact": "More time during requirements phase, and maybe reworking during development. Could be difficult times during testing with client",
    "likelihood": "Medium"
  },
  {
    "id": "Id_3",
    "level": "Low",
    "label": "System integration more complex than estimated",
    "mitigation": "Early development of integration plan, with formal entry requirements for components entering integration this i123 s a modification",
    "contingency": "Expend more development effort, try and minimize this by regular meetings between development and integration tems",
    "impact": "Delays to project and higher costs of development",
    "likelihood": "Low"
  },
]

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