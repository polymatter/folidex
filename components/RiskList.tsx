import * as React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';

import Risk from '../entities/Risk';
import { View } from '../components/Themed';
import RiskSummaryItem from '../components/RiskSummaryItem';
import RiskStoreContext from '../store/RiskStore';

export default function RiskList({ onPressRiskSummary, showIcon = true }: { onPressRiskSummary: (riskId: string) => void, showIcon?: boolean }) {

  const risks = React.useContext(RiskStoreContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        {risks.map(risk => (
          <Pressable key={risk.id} onPress={() => onPressRiskSummary(risk.id)}>
            <RiskSummaryItem riskId={risk.id} showIcon={showIcon} />
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
