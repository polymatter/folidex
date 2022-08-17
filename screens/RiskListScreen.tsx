import * as React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';

import Risk from '../entities/Risk';
import { View } from '../components/Themed';
import RiskSummaryItem from '../components/RiskSummaryItem';
import { RootTabScreenProps } from '../types/navigation';
import RiskStoreContext from '../store/RiskStore';

export default function RiskListScreen({ navigation }: RootTabScreenProps<'Risk List'>) {

  const onPressRiskSummary = (risk: Risk) => {
    navigation.navigate('Risk Detail', { riskId: risk.id });
  }

  const risks = React.useContext(RiskStoreContext);

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {risks.map(risk => (
            <Pressable key={risk.id} onPress={() => onPressRiskSummary(risk)}>
              <RiskSummaryItem riskId={risk.id} />
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
