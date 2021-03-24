import * as React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RiskDetail, RiskListTabParamList } from '../types';
import APIEndpoints from '../constants/APIEndpoints';
import { View } from '../components/Themed';
import RiskSummary from '../components/RiskSummary';

export default function RiskListScreen({ navigation }: { navigation: StackNavigationProp<RiskListTabParamList, 'RiskListScreen'> }) {

  const onPressRiskSummary = (risk: RiskDetail) => {
    navigation.navigate('RiskDetailScreen', { risk });
  }

  const [risks, setRisks] = React.useState([] as RiskDetail[]);
  React.useEffect(() => {
    fetch(APIEndpoints.riskDetailList).then(d => d.json() as Promise<RiskDetail[]>).then(setRisks);
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {risks.map(risk => (
          <Pressable key={risk.id} onPress={() => onPressRiskSummary(risk)}>
            <RiskSummary risk={risk} />
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
