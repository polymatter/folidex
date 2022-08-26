import * as React from 'react';
import Risk from '../entities/Risk';
import { RootTabScreenProps } from '../types/navigation';
import RiskList from '../components/RiskList';

export default function RiskListScreen({ navigation }: RootTabScreenProps<'Risk List'>) {

  const onPressRiskSummary = (riskId: string) => {
    navigation.navigate('Risk Detail', { riskId });
  }

  return (
    <RiskList onPressRiskSummary={onPressRiskSummary}/>
  );
}