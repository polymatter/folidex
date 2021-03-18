import { RouteProp } from '@react-navigation/core';
import React from 'react'

import { Text, View } from '../components/Themed';
import { RiskListTabParamList } from '../types';


const RiskDetailScreen = ({route:{ params: { risk }}} : {route: RouteProp<RiskListTabParamList, 'RiskDetailScreen'>}) => {

    return (
        <View>
            <Text>This is a Detail Screen {risk.label}</Text>
        </View>
    )
}

export default RiskDetailScreen
