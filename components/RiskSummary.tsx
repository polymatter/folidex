import React from 'react'
import { RiskDetail } from '../types';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const RiskSummary = (risk: RiskDetail & { options: Array<Object> }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
            { risk.level === 'High' &&
                <Text style={[styles.levelBadge, styles.levelBadgeHigh]}>High</Text>
            }
            { risk.level === 'Medium' &&
                <Text style={[styles.levelBadge, styles.levelBadgeMedium]}>Medium</Text>
            }
            { risk.level === 'Low' &&
                <Text style={[styles.levelBadge, styles.levelBadgeLow]}>Low</Text>
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
        color: '#fff',
        display: 'flex',
        flexShrink: 0,
        borderRadius: 15,
        fontSize: 12,
        paddingLeft: 8,
        paddingRight: 8,
    },
    levelBadgeLow: {
        backgroundColor: '#29c338',
    },
    levelBadgeMedium: {
        backgroundColor: '#efa73c',
    },
    levelBadgeHigh: {
        backgroundColor: '#dc3545',
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
