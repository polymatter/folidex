import * as React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RiskListTabParamList } from '../types/navigation';
import Risk, { buildMakeRisk, RiskProps } from '../entities/Risk';
import APIEndpoints from '../constants/APIEndpoints';
import { View } from '../components/Themed';
import RiskSummaryItem from '../components/RiskSummaryItem';

export default function RiskListScreen({ navigation }: { navigation: StackNavigationProp<RiskListTabParamList, 'RiskListScreen'> }) {

  const onPressRiskSummary = (risk: Risk) => {
    navigation.navigate('RiskDetailScreen', { risk });
  }

  const [risks, setRisks] = React.useState([] as Risk[]);
  React.useEffect(() => {
    fetch(APIEndpoints.riskDetailList)
    .then(d => d.json() as Promise<RiskProps[]>)
    .then(riskprops => {
      const makeRisk = buildMakeRisk({});
      return riskprops.map(riskProp => makeRisk(riskProp));
    })
    .then(setRisks);
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {risks.map(risk => (
          <Pressable key={risk.getId()} onPress={() => onPressRiskSummary(risk)}>
            <RiskSummaryItem risk={risk} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
