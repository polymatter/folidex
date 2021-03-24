import * as React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RiskDetail, RiskListTabParamList } from '../types';
import { View } from '../components/Themed';
import RiskSummary from '../components/RiskSummary';

export default function RiskListScreen({ navigation }: { navigation: StackNavigationProp<RiskListTabParamList, 'RiskListScreen'> }) {

  const buttonClick = (risk: RiskDetail) => {
    navigation.navigate('RiskDetailScreen', { risk });
  }

  const [risks, setRisks] = React.useState([] as RiskDetail[]);
  React.useEffect(() => {
    fetch('https://411uchidwl.execute-api.eu-west-2.amazonaws.com/dev/risks').then(d => d.json() as Promise<RiskDetail[]>).then(setRisks);
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {risks.map(risk => {
          return <Pressable key={risk.id} onPress={() => buttonClick(risk)}><RiskSummary key={risk.id} risk={risk}></RiskSummary></Pressable>
        })
        }
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
