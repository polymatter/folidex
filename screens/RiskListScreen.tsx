import * as React from 'react';
import Risk from '../entities/Risk';
import { RootTabScreenProps } from '../types/navigation';
import RiskList from '../components/RiskList';

export default function RiskListScreen({ navigation }: RootTabScreenProps<'Risk List'>) {

  const onPressRiskSummary = (risk: Risk) => {
    navigation.navigate('Risk Detail', { riskId: risk.id });
  }

  return (
    <RiskList onPressRiskSummary={onPressRiskSummary}/>
  );
}