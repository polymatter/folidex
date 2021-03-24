import React from 'react'
import { StyleSheet } from 'react-native';
import { RiskDetail } from '../types';
import { Text, View } from './Themed';
import RiskLevelBadge from './RiskLevelBadge';

// only needs the 'level and 'label' of Risk. Useful in case we want to optimise the risk summary list screen, only fetching information when required.
const RiskSummary = ({ risk }: { risk: Pick<RiskDetail, 'level' | 'label'> }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        <RiskLevelBadge level={risk.level} />
        {risk.label}
      </Text>
      <View style={styles.separator} lightColor="#aaa" darkColor="rgba(255,255,255,0.1)" />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    display: 'flex',
    flexGrow: 10
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '90%',
  },
});

export default RiskSummary
