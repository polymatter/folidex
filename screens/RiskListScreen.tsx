import * as React from 'react';
import { Button, StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import RiskSummary from '../components/RiskSummary';
import { Text, View } from '../components/Themed';
import { BottomTabParamList, RiskDetail } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

export default function RiskListScreen({navigation} : {navigation: StackNavigationProp<BottomTabParamList, 'RiskList'>}) {

  const buttonClick = () => {
    navigation.navigate('TabTwo');
  }

  const [risks, setRisks] = React.useState([] as RiskDetail[]);
  React.useEffect(() => {
    fetch('https://411uchidwl.execute-api.eu-west-2.amazonaws.com/dev/risks').then(d => d.json() as Promise<RiskDetail[]>).then(setRisks);
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {risks.map(risk => {
          return <RiskSummary key={risk.id} risk={risk}></RiskSummary>
        })
        }
      </ScrollView>
      <Button title="Thing" onPress={buttonClick} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/RiskListScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
