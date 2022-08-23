import React, { useContext, useState } from 'react'

import { RootTabScreenProps } from '../types/navigation';
import RiskDetail from '../components/RiskDetail';

const RiskDetailScreen = ({ route: { params: { riskId } } }: RootTabScreenProps<'Risk Detail'>) => {

  return <RiskDetail riskId={riskId} />
}

export default RiskDetailScreen