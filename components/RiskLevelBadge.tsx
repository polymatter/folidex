import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from '../components/Themed';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { RiskLevel } from '../types'

const HighRed = Colors.badgeLevels.High;
const MediumYellow = Colors.badgeLevels.Medium;
const LowGreen = Colors.badgeLevels.Low;

const RiskLevelBadge = ({level}:{level: RiskLevel}) => {
    switch(level) {
        case 'High':
            return <Text style={[styles.levelBadge, styles.levelBadgeHigh]}><MaterialIcons name="dangerous" size={24} color={HighRed} />High</Text>
        case 'Medium':
            return <Text style={[styles.levelBadge, styles.levelBadgeMedium]}><MaterialIcons name="warning" size={24} color={MediumYellow} />Medium</Text>
        case 'Low':
            return <Text style={[styles.levelBadge, styles.levelBadgeLow]}><MaterialCommunityIcons name="emoticon-happy-outline" size={24} color={LowGreen} />Low</Text>
    }
}

const styles = StyleSheet.create({
    label: {
        display: 'flex',
        flexGrow: 10
    },
    levelBadge: {
        display: 'flex',
        flexShrink: 0,
        borderRadius: 15,
        fontSize: 12,
        paddingLeft: 8,
        paddingRight: 8,
        marginRight: 30,
    },
    levelBadgeLow: {
        color: LowGreen,
    },
    levelBadgeMedium: {
        color: MediumYellow,
    },
    levelBadgeHigh: {
        color: HighRed,
    },
});

export default RiskLevelBadge
