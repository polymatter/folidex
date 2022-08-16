import * as React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';

import Risk, { buildMakeRisk } from '../entities/Risk';
import { getRiskDetailList } from '../adaptors/DataAccess';
import { View } from '../components/Themed';
import RiskSummaryItem from '../components/RiskSummaryItem';
import { RootTabScreenProps } from '../types/navigation';

export default function RiskListScreen({ navigation }: RootTabScreenProps<'Risk List'> ) {

  const onPressRiskSummary = (risk: Risk) => {
    navigation.navigate('Risk Detail', { risk });
  }

  const [risks, setRisks] = React.useState([] as Risk[]);
  React.useEffect(() => {
    setRisks([]);
    getRiskDetailList()
      .then(d => d.json() as Promise<Risk[]>)
      .then(riskprops => {
        const makeRisk = buildMakeRisk({});
        return riskprops.map(riskProp => makeRisk(riskProp));
      })
      .then(setRisks);
  }, [])

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {risks.map(risk => (
            <Pressable key={risk.id} onPress={() => onPressRiskSummary(risk)}>
              <RiskSummaryItem risk={risk} />
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
