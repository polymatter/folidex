import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from '../components/Themed';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { RiskLevel } from '../types'

const HighRed = Colors.badgeLevels.High;
const MediumYellow = Colors.badgeLevels.Medium;
const LowGreen = Colors.badgeLevels.Low;

const RiskLevelBadge = ({ level }: { level: RiskLevel }) => {
  switch (level) {
    case 'High':
      return <>
        <MaterialIcons name="dangerous" size={24} color={HighRed} />
        <Text style={[styles.levelBadge, styles.levelBadgeHigh]}>High</Text>
      </>
    case 'Medium':
      return <>
        <MaterialIcons name="warning" size={24} color={MediumYellow} />
        <Text style={[styles.levelBadge, styles.levelBadgeMedium]}>Medium</Text>
      </>
    case 'Low':
      return <>
        <MaterialCommunityIcons name="emoticon-happy-outline" size={24} color={LowGreen} />
        <Text style={[styles.levelBadge, styles.levelBadgeLow]}>Low</Text>
      </>
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
