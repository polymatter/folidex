import React from 'react'
import { RiskDetail } from '../types';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const HighRed = '#dc3545';
const MediumYellow = '#efa73c';
const LowGreen = '#29c338';

const RiskSummary = ({risk}: {risk: RiskDetail}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
            { risk.level === 'High' &&
                <Text style={[styles.levelBadge, styles.levelBadgeHigh]}><MaterialIcons name="dangerous" size={24} color={HighRed} />High</Text>
            }
            { risk.level === 'Medium' &&
                <Text style={[styles.levelBadge, styles.levelBadgeMedium]}><MaterialIcons name="warning" size={24} color={MediumYellow} />Medium</Text>
            }
            { risk.level === 'Low' &&
                <Text style={[styles.levelBadge, styles.levelBadgeLow]}><MaterialCommunityIcons name="emoticon-happy-outline" size={24} color={LowGreen} />Low</Text>
            }
            {risk.label}</Text>
            <View style={styles.separator} lightColor="#aaa" darkColor="rgba(255,255,255,0.1)" />
        </View>
    )
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
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 10,
        height: 1,
        width: '90%',
    },
});

export default RiskSummary
