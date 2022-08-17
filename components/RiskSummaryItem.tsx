import React, { useContext } from 'react'
import { StyleSheet } from 'react-native';
import Risk from '../entities/Risk';
import { Text, View } from './Themed';
import RiskLevelBadge from './RiskLevelBadge';
import RiskStoreContext from '../store/RiskStore';

const RiskSummaryItem = ({ riskId }: { riskId: string }) => {

  const risk : Risk | undefined = useContext(RiskStoreContext).filter(r => r.id == riskId)?.pop();
  if (risk == undefined) {
    return <Text>Could not find risk with id "{riskId}"</Text>
  }

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

export default RiskSummaryItem
