import * as React from 'react';
import { render } from '@testing-library/react-native';
import RiskLevelBadge from './RiskLevelBadge';
import Colors from '../constants/Colors';
import { RiskLevel } from '../entities/Risk';

interface Snapshot {
  children: Array<{ props: { name: string } }>
}

interface RiskLevelTests {
  text: string | RegExp,
  icon: string,
  styles: object
}

/**
 * Tests to perform on each Risk Level
 * 
 * 1. Named icon is correct. Tests for any component with a prop called name with this value
 * 2. Badge text is displayed. Tests that the rendering of the icon is correct
 * 3. Badge text has correct styles. Tests that the badge is styled correctly
 * 4. Snapshot. Should catch any generic changes in appearance. Since this might change a lot during UI tweaks, can't trust this to catch errors
 * 
 * @param level The level of the RiskLevelBadge
 * @param textValues 
 */
function testRiskLevel(level: RiskLevel, { text, icon, styles }: RiskLevelTests) {
  const { toJSON, getByText, container: element } = render(
    <RiskLevelBadge level={level} />
  )
  const snapshot = toJSON() as Snapshot;
  // 1. Tests for a child component with a prop called name with this value
  expect(snapshot.children.find(c => c.props.name === icon)).not.toBeUndefined();
  // 2. Badge text is displayed.
  expect(element).toHaveTextContent(text);
  // 3. Badge text has correct styles
  // getBy* throws error if not found exactly once (which fails the test)
  expect(getByText(text)).toHaveStyle(styles);
  // 4. Snapshot
  expect(snapshot).toMatchSnapshot();
}

describe('<RiskLevelBadge>', () => {

  test('can render a high risk badge', () => {

    const level = "High"
    const testValues = {
      text: /High/i,
      icon: "dangerous",
      styles: [{ color: Colors.badgeLevels.High }]
    }

    testRiskLevel(level, testValues);
  })

  test('can render a medium risk badge', () => {

    const level = "Medium"
    const testValues = {
      text: /Medium/i,
      icon: "warning",
      styles: [{ color: Colors.badgeLevels.Medium }]
    }

    testRiskLevel(level, testValues);
  })

  test('can render a low risk badge', () => {

    const level = "Low"
    const testValues = {
      text: /Low/i,
      icon: "emoticon-happy-outline",
      styles: [{ color: Colors.badgeLevels.Low }]
    }

    testRiskLevel(level, testValues);
  })
})